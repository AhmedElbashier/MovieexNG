import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudanPlayComponent } from './sudan-play.component';

describe('SudanPlayComponent', () => {
  let component: SudanPlayComponent;
  let fixture: ComponentFixture<SudanPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudanPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudanPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
