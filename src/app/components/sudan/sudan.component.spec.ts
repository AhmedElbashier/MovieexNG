import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudanComponent } from './sudan.component';

describe('SudanComponent', () => {
  let component: SudanComponent;
  let fixture: ComponentFixture<SudanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
