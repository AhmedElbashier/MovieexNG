import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSdMovieDialogComponent } from './app-sd-movie-dialog.component';

describe('AppSdMovieDialogComponent', () => {
  let component: AppSdMovieDialogComponent;
  let fixture: ComponentFixture<AppSdMovieDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSdMovieDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSdMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
