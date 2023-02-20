import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescatalougeComponent } from './moviescatalouge.component';

describe('MoviescatalougeComponent', () => {
  let component: MoviescatalougeComponent;
  let fixture: ComponentFixture<MoviescatalougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviescatalougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviescatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
