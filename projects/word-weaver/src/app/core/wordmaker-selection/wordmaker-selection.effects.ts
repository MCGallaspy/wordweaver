import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { State } from "./wordmaker-selection.model";
import {
  tap,
  withLatestFrom,
  switchMap,
  catchError,
  map,
  distinctUntilChanged,
  mapTo,
  filter
} from "rxjs/operators";
import { of } from "rxjs";
import { WordmakerState } from "./wordmaker-selection.model";
import { selectWordmakerState, selectSettingsState } from "../core.state";
import { LocalStorageService } from "../local-storage/local-storage.service";
import {
  actionConjugationEvent,
  actionChangeAgent,
  actionChangeAffOption,
  actionChangePatient,
  actionChangeVerb,
  actionChangeStep,
  actionChangeLoading,
  actionChangeConjugations
} from "./wordmaker-selection.actions";
import { HttpClient, HttpParams } from "@angular/common/http";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { NotificationService } from "../notifications/notification.service";
import { VerbService } from "../verb/verb.service";
import { AffixService } from "../affix/affix.service";
import { PronounService } from "../pronoun/pronoun.service";

export const WORDMAKER_SELECTION_KEY = "WORDMAKER";

export function createRequestQueryArgs(selection) {
  const params = new URLSearchParams();
  ["option", "agent", "patient", "root"].forEach(x => {
    if (selection[x]) {
      params.append(x, selection[x].tag);
    }
  });
  return params;
}

export function randomX(x) {
  return x[Math.floor(Math.random() * (x.length - 1) + 1)];
}

@Injectable()
export class WordmakerEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private notificationService: NotificationService,
    private verbService: VerbService,
    private affixService: AffixService,
    private pronounService: PronounService
  ) {}

  // TODO: persist
  // persistSelection = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(
  //         actionChangeAgents,
  //         actionChangeAffOptions,
  //         actionChangeVerbs,
  //         actionChangePatients
  //       ),
  //       withLatestFrom(this.store.pipe(select(selectWordmakerState))),
  //       tap(([action, settings]) =>
  //         this.localStorageService.setItem(WORDMAKER_SELECTION_KEY, settings)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  changeStep = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionChangeStep),
        withLatestFrom(this.store.pipe(select(selectWordmakerState))),
        tap(([action, selection]) => {
          switch (selection.step) {
            // Verb Selection Step
            case 0: {
              // Reset following choices
              this.store.dispatch(actionChangeAgent({ agent: null }));
              this.store.dispatch(actionChangePatient({ patient: null }));
              this.store.dispatch(actionChangeAffOption({ option: null }));
              break;
            }
            // Pronoun Selection Step
            case 1: {
              // Notify random selection
              if (!selection.root) {
                const random = randomX(this.verbService.verbs);
                this.store.dispatch(actionChangeVerb({ root: random }));
                this.notificationService.translated(
                  marker("ww.wordmaker.notifications.random.verb"),
                  { value: random.gloss },
                  "success"
                );
              }
              // Reset following choice
              this.store.dispatch(actionChangeAffOption({ option: null }));
              break;
            }
            // Temp Selection Step
            case 2: {
              // Notify random selection
              // TODO: This should be made language independent
              if (
                selection.root.thematic_relation === "purple" &&
                (!selection.agent || !selection.patient)
              ) {
                // TODO: This should filter invalid combinations
                const pronoun = {
                  agent: selection.agent,
                  patient: selection.patient
                };
                if (!selection.agent) {
                  const randomAgent = randomX(this.pronounService.pronouns);
                  this.store.dispatch(
                    actionChangeAgent({ agent: randomAgent })
                  );
                  pronoun.agent = randomAgent;
                }
                if (!selection.patient) {
                  const randomPatient = randomX(this.pronounService.pronouns);
                  this.store.dispatch(
                    actionChangePatient({ patient: randomPatient })
                  );
                  pronoun.patient = randomPatient;
                }
                this.notificationService.translated(
                  marker("ww.wordmaker.notifications.random.pers.transitive"),
                  {
                    agent: pronoun.agent.gloss,
                    patient: pronoun.patient.gloss
                  },
                  "success"
                );
              } else if (
                selection.root.thematic_relation === "blue" &&
                !selection.patient
              ) {
                const randomPatient = randomX(this.pronounService.pronouns);
                this.store.dispatch(
                  actionChangePatient({ patient: randomPatient })
                );
                this.notificationService.translated(
                  marker("ww.wordmaker.notifications.random.pers.transitive"),
                  { value: randomPatient.gloss },
                  "success"
                );
              } else if (
                selection.root.thematic_relation === "red" &&
                !selection.agent
              ) {
                const randomAgent = randomX(this.pronounService.pronouns);
                this.store.dispatch(actionChangeAgent({ agent: randomAgent }));
                this.notificationService.translated(
                  marker("ww.wordmaker.notifications.random.pers.intransitive"),
                  { value: randomAgent.gloss },
                  "success"
                );
              }
              break;
            }
            case 3: {
              // Notify random selection
              if (!selection.option) {
                const random = randomX(this.affixService.affixoptions);
                this.store.dispatch(actionChangeAffOption({ option: random }));
                this.notificationService.translated(
                  marker("ww.wordmaker.notifications.random.temp"),
                  { value: random.gloss },
                  "success"
                );
              }
            }
          }
        })
      ),
    { dispatch: false }
  );

  // conjugate = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(actionConjugationEvent),
  //       withLatestFrom(this.store.pipe(select(selectWordmakerState))),
  //       tap(([action, selection]) => {
  //         const queryArgs = createRequestQueryArgs(selection);
  //         if (queryArgs) {
  //           this.store.dispatch(actionChangeLoading({ loading: true }));
  //           this.store
  //             .pipe(
  //               select(selectSettingsState),
  //               switchMap(settings =>
  //                 this.http
  //                   .get(
  //                     settings.baseUrl + "conjugations?" + queryArgs.toString()
  //                   )
  //                   .pipe(catchError(err => of(err)))
  //               )
  //             )
  //             .subscribe(conj => {
  //               this.store.dispatch(actionChangeLoading({ loading: false }));
  //               this.store.dispatch(
  //                 actionChangeConjugations({ conjugations: conj })
  //               );
  //             });
  //         }
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
