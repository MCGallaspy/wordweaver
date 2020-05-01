import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Verb } from "../../../config/config";
import { environment } from "../../../environments/environment";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class VerbService {
  verbs: Verb[];
  path = environment.base + environment.prefix + `verbs`;
  verbs$: Observable<Verb[]>;
  random$: Observable<Verb>;
  constructor(private http: HttpClient) {
    this.verbs$ = this.http.get<Verb[]>(this.path).pipe(shareReplay(1));
    this.verbs$.subscribe(verbs => (this.verbs = verbs));
    this.random$ = this.verbs$.pipe(
      map(res => {
        return this.getRandomOption(res);
      })
    );
  }

  getRandomOption(options: Verb[]): Verb {
    return options[Math.floor(Math.random() * options.length)];
  }

  getVerb(tag) {
    return this.verbs.filter(v => v.tag === tag)[0];
  }

  searchEntries(terms: Observable<string>) {
    return terms.pipe(
      // debounceTime(100),
      distinctUntilChanged(),
      map(val =>
        this.verbs.filter(verb => {
          if (val && val.length > 2) {
            return (
              verb.gloss.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
              verb.tag.toLowerCase().indexOf(val.toLowerCase()) > -1
            );
          } else {
            return true;
          }
        })
      )
    );
  }
}
