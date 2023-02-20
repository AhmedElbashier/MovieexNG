import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchmoviesDialogComponent } from './app-searchmovies-dialog.component';

describe('AppSearchmoviesDialogComponent', () => {
  let component: AppSearchmoviesDialogComponent;
  let fixture: ComponentFixture<AppSearchmoviesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearchmoviesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchmoviesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
