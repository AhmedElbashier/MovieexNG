import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviesDetailsComponent } from './searchmovies-details.component';

describe('SearchmoviesDetailsComponent', () => {
  let component: SearchMoviesDetailsComponent;
  let fixture: ComponentFixture<SearchMoviesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMoviesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
