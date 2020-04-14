import { AffOption, Conjugation, Pronoun, Verb } from "../../models/models";
import { AppState } from "../core.module";

export interface TableviewerState {
  "aff-option": AffOption[];
  agent: Pronoun[];
  patient: Pronoun[];
  root: Verb[];
  gridView: boolean;
  treeDepth: TableviewerTreeDepth;
  standardTreeOrder: boolean;
  conjugations: Conjugation[];
}

export interface State extends AppState {
  tableviewer: TableviewerState;
}

export type TableviewerTreeDepth = 0 | 1 | 2 | 3;