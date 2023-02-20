import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescatalougeDetailsComponent } from './moviescatalouge-details.component';

describe('MoviescatalougeDetailsComponent', () => {
  let component: MoviescatalougeDetailsComponent;
  let fixture: ComponentFixture<MoviescatalougeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviescatalougeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviescatalougeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
