import {
  initialState,
  tableviewerReducer,
} from "./tableviewer-selection.reducer";

import {
  actionChangeOptions,
  actionChangeAgents,
  actionChangePatients,
  actionChangeVerbs,
} from "./tableviewer-selection.actions";

describe("TableviewerReducer", () => {
  it("should return default state", () => {
    const action = {} as any;
    const state = tableviewerReducer(undefined, action);
    expect(state).toBe(initialState);
  });
});
