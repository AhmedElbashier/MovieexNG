import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudanTvComponent } from './sudan-tv.component';

describe('SudanTvComponent', () => {
  let component: SudanTvComponent;
  let fixture: ComponentFixture<SudanTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudanTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudanTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
