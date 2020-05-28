import {
  Option,
  Pronoun,
  Verb,
  Response,
  TableviewerViewModes
} from "../../../config/config";
import { AppState } from "../core.module";

export interface TableviewerState {
  option: Option[];
  agent: Pronoun[];
  patient: Pronoun[];
  root: Verb[];
  view: TableviewerViewModes;
  treeDepth: TableviewerTreeDepth;
  standardTreeOrder: boolean;
  conjugations: Response;
  loading: boolean;
}

export interface State extends AppState {
  tableviewer: TableviewerState;
}

export type TableviewerTreeDepth = 0 | 1 | 2 | 3;
