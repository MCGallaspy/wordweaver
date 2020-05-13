import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, of, combineLatest } from "rxjs";
import { switchMap, catchError, take } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { SettingsState, State } from "../../core/settings/settings.model";
import { selectSettings } from "../../core/settings/settings.selectors";
import { actionSettingsChangeLevel } from "../../core/settings/settings.actions";
import { actionChangeLoading } from "../../core/tableviewer-selection/tableviewer-selection.actions";
import { HttpClient } from "@angular/common/http";
import { selectTableviewerState } from "../../core/core.state";
import { TIERS } from "../../../config/config";
import { NotificationService } from "../../core/core.module";
import { marker } from "@biesbjerg/ngx-translate-extract-marker";
import { TableviewerState } from "../../core/tableviewer-selection/tableviewer-selection.model";
import { saveAs } from "file-saver";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "ww-download-dialog",
  templateUrl: "./download-dialog.component.html",
  styleUrls: ["./download-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadDialogComponent implements OnInit {
  objectkeys = Object.keys;
  settings$: Observable<SettingsState>;
  selection$: Observable<TableviewerState>;
  selectionAndSettings$: Observable<[TableviewerState, SettingsState]>;
  fileTypes: string[] = ["csv", "docx", "latex"];
  showDelay = new FormControl(600);
  hideDelay = new FormControl(200);
  tooltipPosition = "above";
  form: FormGroup = new FormGroup({
    ftype: new FormControl("docx", [Validators.required]),
    headers: new FormControl(false),
    heading: new FormControl("")
  });
  constructor(
    private dialogRef: MatDialogRef<DownloadDialogComponent>,
    private store: Store<State>,
    private http: HttpClient,
    private notificationService: NotificationService,
    private translate: TranslateService
  ) {
    this.translate
      .get(marker("ww.download.dialog.settings.heading.placeholder"))
      .subscribe(x => this.form.controls.heading.setValue(x));
  }

  ngOnInit(): void {
    this.selection$ = this.store.pipe(select(selectTableviewerState));
    this.settings$ = this.store.pipe(select(selectSettings));
    this.selectionAndSettings$ = combineLatest([
      this.selection$,
      this.settings$
    ]);
  }

  onLevelSelect({ checked }, key: string) {
    this.store.dispatch(actionSettingsChangeLevel({ checked, key }));
  }

  createRequestQueryArgs(selection) {
    const params = new URLSearchParams();
    ["option", "agent", "patient", "root"].forEach(x => {
      selection[x].forEach(y => {
        if (y.tag) {
          params.append(x, y.tag);
        }
      });
    });
    return params;
  }

  download() {
    this.selectionAndSettings$
      .pipe(
        take(1),
        switchMap(([selection, appSettings]) => {
          const queryArgs = this.createRequestQueryArgs(selection);
          if (queryArgs) {
            this.store.dispatch(actionChangeLoading({ loading: true }));
            const tiers = TIERS.filter(x => appSettings.level[x.name]);
            const settings = {
              heading: this.form.controls.heading.value,
              headers: this.form.controls.headers.value
            };
            return this.http
              .post(
                appSettings.baseUrl +
                  `files?file-type=${this.form.controls.ftype.value}&` +
                  queryArgs.toString(),
                { tiers, settings },
                { responseType: "blob" }
              )
              .pipe(
                catchError(err => {
                  this.notificationService.translated(
                    marker("ww.tableviewer.notifications.download.error"),
                    {},
                    "error"
                  );
                  return of(err);
                })
              );
          }
        })
      )
      .subscribe((x: Blob) => {
        saveAs(x, `conjugations.${this.form.controls.ftype.value}`);
        this.store.dispatch(actionChangeLoading({ loading: false }));
      });
  }

  exit() {
    this.dialogRef.close();
  }
}