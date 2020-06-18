import { Observable, of } from "rxjs";
import {
  map,
  switchMap,
  catchError,
  shareReplay,
  filter
} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Response, ResponseObject } from "../../../config/config";
import { Tier } from "../../../config/config";
import { TableviewerState } from "../tableviewer-selection/tableviewer-selection.model";
import { WordmakerState } from "../wordmaker-selection/wordmaker-selection.model";
import { select, Store } from "@ngrx/store";
import { actionChangeLoading } from "../tableviewer-selection/tableviewer-selection.actions";
import { selectSettingsState } from "../core.state";
import { SettingsState } from "../settings/settings.model";
import { GridOrder } from "../../pages/tableviewer/conjugation-grid/conjugation-grid.component";

export type ConjugationRetrievalMethod = "endpoint" | "cache";

@Injectable({
  providedIn: "root"
})
export class ConjugationService {
  TIERS = environment.config.tiers;
  conjugations;
  conjugations$: Observable<Response>;
  random$: Observable<ResponseObject>;
  constructor(private http: HttpClient, private store: Store) {
    this.conjugations$ = this.store.pipe(
      select(selectSettingsState),
      switchMap((settings: SettingsState) =>
        this.http.get<Response>(settings.baseUrl + "conjugations")
      ),
      shareReplay(1)
    );
    this.random$ = this.conjugations$.pipe(
      map(res => this.getRandomOption(res))
    );
  }

  getRandomOption(options: Response): ResponseObject {
    return options[Math.floor(Math.random() * options.length)];
  }

  // FIXME: Not working with TableViewer
  createRequestQueryArgs(selection) {
    const params = new URLSearchParams();
    ["option", "agent", "patient", "root"].forEach(x => {
      if (selection[x]) {
        params.append(x, selection[x].tag);
      }
    });
    return params;
  }

  filterConjugations(
    conjugations: Response,
    selection: TableviewerState | WordmakerState
  ) {
    const filterValues = { root: [], option: [], agent: [], patient: [] };
    ["option", "agent", "patient", "root"].forEach(x => {
      if (selection[x]) {
        if (Array.isArray(selection[x])) {
          filterValues[x] = filterValues[x].concat(
            selection[x].map(x => x.tag)
          );
        } else {
          filterValues[x].push(selection[x].tag);
        }
      }
    });
    return conjugations.filter(x => {
      return ["option", "agent", "patient", "root"].every(
        k =>
          filterValues[k].length === 0 ||
          filterValues[k].indexOf(x.input[k]) > -1
      );
    });
  }

  conjugate$(
    selection: TableviewerState | WordmakerState,
    method: ConjugationRetrievalMethod = "cache"
  ) {
    if (method === "endpoint") {
      const queryArgs = this.createRequestQueryArgs(selection);
      return this.store.pipe(
        select(selectSettingsState),
        switchMap((settings: SettingsState) =>
          this.http
            .get(settings.baseUrl + "conjugations?" + queryArgs.toString())
            .pipe(catchError(err => of(err)))
        )
      );
    } else {
      return this.conjugations$.pipe(
        map(conjugations => this.filterConjugations(conjugations, selection))
      );
    }
  }

  // Restructure data for x*y grid
  // Returns structured data along with unique values for col/row and table separators
  restructureData(conjugations: Response, gridOrder: GridOrder) {
    const main = gridOrder.main;
    const row = gridOrder.row;
    const col = gridOrder.col;
    const structuredData = [];
    const restructuredConjugations = conjugations.map(x => ({
      ...x.input,
      ...x,
      pn: x.input.agent + "." + x.input.patient
    }));
    const uniqueMain = [...new Set(restructuredConjugations.map(x => x[main]))];
    const uniqueRow = [...new Set(restructuredConjugations.map(x => x[row]))];
    const uniqueCol = [...new Set(restructuredConjugations.map(x => x[col]))];
    uniqueMain.forEach(mainKey => {
      const mainData = [];
      const mainDataRows = uniqueRow.map(rowKey => {
        const structuredEntry = { rowKey };
        restructuredConjugations.forEach(entry => {
          if (entry[main] === mainKey && entry[row] === rowKey) {
            structuredEntry[entry[col]] = entry;
          }
        });
        mainData.push(structuredEntry);
      });
      structuredData.push(mainData);
    });
    return { structuredData, uniqueMain, uniqueCol, uniqueRow };
  }
}