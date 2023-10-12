// while config.ts holds the software configuration for the word-weaver
// conjugation application, this file, schema.ts, holds the type declarations
// for the data only, i.e., for conjugations.json, options.json, pronouns.json
// and verbs.json.

export interface Option {
  classes: string[];
  gloss: string;
  tag: string;
  type?: string;
}

export interface Pronoun {
  gender: "M" | "F" | "N" | "";
  gloss: string;
  number: "SG" | "PL";
  role: "agent" | "patient" | "";
  obj_gloss: string;
  person: "1" | "2" | "3";
  value: string;
  position?: Number;
  tag: string;
}

export interface Verb {
  gloss: string;
  display: string;
  tag: string;
  classes: string[];
}

export interface ConjugationInput {
  root: string;
  option: string;
  agent: string;
  patient: string;
}

export type ResponseMorpheme = [
  position: number,
  value: string,
  type: string[]
];

export type Conjugation = ResponseMorpheme[];

export interface ResponseObject {
  input: ConjugationInput;
  output: Conjugation;
}

export type Response = ResponseObject[];
