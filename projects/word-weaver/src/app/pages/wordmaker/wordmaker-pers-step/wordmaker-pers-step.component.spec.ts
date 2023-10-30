import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";
import { MockStore, provideMockStore } from "@ngrx/store/testing";

import { SharedModule } from "../../../shared/shared.module";
import { WordmakerPersStepComponent } from "./wordmaker-pers-step.component";

describe("WordmakerPersStepComponent", () => {
  let component: WordmakerPersStepComponent;
  let fixture: ComponentFixture<WordmakerPersStepComponent>;
  let store: MockStore;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordmakerPersStepComponent],
      providers: [provideMockStore()],
      imports: [
        SharedModule,
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        HttpClientModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordmakerPersStepComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
