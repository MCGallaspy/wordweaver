import { createAction, props } from "@ngrx/store";

import { Language } from "./settings.model";

export const actionSettingsChangeLanguage = createAction(
  "[Settings] Change Language",
  props<{ language: Language }>()
);

export const actionSettingsChangeLevel = createAction(
  "[Settings] Change Level",
  props<{ checked: boolean; key: string }>()
);

export const actionSettingsChangeHighlight = createAction(
  "[Settings] Change Highlight",
  props<{ checked: boolean; key: string }>()
);

export const actionSettingsChangeTestApi = createAction(
  "[Settings] Change TestApi",
  props<{ testApi: boolean }>()
);

export const actionSettingsChangeTheme = createAction(
  "[Settings] Change Theme",
  props<{ theme: string }>()
);

export const actionSettingsChangeBaseUrl = createAction(
  "[Settings] Change Base Url",
  props<{ baseUrl: string }>()
);

export const actionSettingsChangeAutoNightMode = createAction(
  "[Settings] Change Auto Night Mode",
  props<{ autoNightMode: boolean }>()
);

export const actionSettingsChangeStickyHeader = createAction(
  "[Settings] Change Sticky Header",
  props<{ stickyHeader: boolean }>()
);

export const actionSettingsChangeAnimationsPage = createAction(
  "[Settings] Change Animations Page",
  props<{ pageAnimations: boolean }>()
);

export const actionSettingsChangeAnimationsPageDisabled = createAction(
  "[Settings] Change Animations Page Disabled",
  props<{ pageAnimationsDisabled: boolean }>()
);

export const actionSettingsChangeAnimationsElements = createAction(
  "[Settings] Change Animations Elements",
  props<{ elementsAnimations: boolean }>()
);
export const actionSettingsChangeHour = createAction(
  "[Settings] Change Hours",
  props<{ hour: number }>()
);
