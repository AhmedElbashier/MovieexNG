import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudanMovieDetailsComponent } from './sudan-movie-details.component';

describe('SudanMovieDetailsComponent', () => {
  let component: SudanMovieDetailsComponent;
  let fixture: ComponentFixture<SudanMovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudanMovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudanMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
