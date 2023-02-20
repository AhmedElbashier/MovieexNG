import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudanPlayDetailsComponent } from './sudan-play-details.component';

describe('SudanPlayDetailsComponent', () => {
  let component: SudanPlayDetailsComponent;
  let fixture: ComponentFixture<SudanPlayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudanPlayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudanPlayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
