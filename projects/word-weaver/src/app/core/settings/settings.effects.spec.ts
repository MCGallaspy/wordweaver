import * as assert from "assert";
import { OverlayContainer } from "@angular/cdk/overlay";
import { TranslateService } from "@ngx-translate/core";
import { Actions, getEffectsMetadata } from "@ngrx/effects";
import { TestScheduler } from "rxjs/testing";
import { Store } from "@ngrx/store";
import { of } from "rxjs";

import {
  AnimationsService,
  AppState,
  LocalStorageService
} from "../core.module";

import { SettingsEffects, SETTINGS_KEY } from "./settings.effects";
import { SettingsState } from "./settings.model";
import { actionSettingsChangeTheme } from "./settings.actions";

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe("SettingsEffects", () => {
  let router: any;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let overlayContainer: jasmine.SpyObj<OverlayContainer>;
  let animationsService: jasmine.SpyObj<AnimationsService>;
  let translateService: jasmine.SpyObj<TranslateService>;
  let store: jasmine.SpyObj<Store<AppState>>;

  beforeEach(() => {
    router = {
      routerState: {
        snapshot: {}
      },
      events: {
        pipe() {}
      }
    };
    localStorageService = jasmine.createSpyObj("LocalStorageService", [
      "setItem"
    ]);
    overlayContainer = jasmine.createSpyObj("OverlayContainer", [
      "getContainerElement"
    ]);
    animationsService = jasmine.createSpyObj("AnimationsService", [
      "updateRouteAnimationType"
    ]);
    translateService = jasmine.createSpyObj("TranslateService", ["use"]);
    store = jasmine.createSpyObj("store", ["pipe"]);
  });

  it("should call methods on LocalStorageService for PERSIST action", () => {
    scheduler.run(helpers => {
      const { cold } = helpers;

      const settings: SettingsState = {
        language: "en",
        pageAnimations: true,
        elementsAnimations: true,
        theme: "default",
        nightTheme: "default",
        autoNightMode: false,
        stickyHeader: false,
        testApi: false,
        level: {
          gloss: false,
          breakdown: false,
          "translation-breakdown": false,
          translation: true
        },
        highlight: {
          root: false,
          pronoun: true,
          aspect: false,
          post_aspectual_suffix: false,
          prepronominal_prefix: false,
          tmp_affix: false
        },
        pageAnimationsDisabled: true,
        hour: 12
      };
      store.pipe.and.returnValue(of(settings));
      const persistAction = actionSettingsChangeTheme({ theme: "DEFAULT" });
      const source = cold("a", { a: persistAction });
      const actions = new Actions(source);
      const effect = new SettingsEffects(
        actions,
        store,
        router,
        overlayContainer,
        localStorageService,
        animationsService,
        translateService
      );

      effect.persistSettings.subscribe(() => {
        expect(localStorageService.setItem).toHaveBeenCalledWith(
          SETTINGS_KEY,
          settings
        );
      });
    });
  });
});