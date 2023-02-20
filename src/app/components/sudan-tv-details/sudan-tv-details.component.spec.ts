import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SudanTvDetailsComponent } from "./sudan-tv-details.component";

describe("SudanTvDetailsComponent", () => {
  let component: SudanTvDetailsComponent;
  let fixture: ComponentFixture<SudanTvDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SudanTvDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudanTvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
