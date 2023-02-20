import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudanMovieComponent } from './sudan-movie.component';

describe('SudanMovieComponent', () => {
  let component: SudanMovieComponent;
  let fixture: ComponentFixture<SudanMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudanMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudanMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
