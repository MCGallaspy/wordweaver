import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SharedModule } from "../../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MockStore, provideMockStore } from "@ngrx/store/testing";

import { WordmakerVerbStepComponent } from "./wordmaker-verb-step.component";

describe("WordmakerVerbStepComponent", () => {
  let component: WordmakerVerbStepComponent;
  let fixture: ComponentFixture<WordmakerVerbStepComponent>;
  let store: MockStore;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordmakerVerbStepComponent],
      providers: [provideMockStore()],
      imports: [
        SharedModule,
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordmakerVerbStepComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
