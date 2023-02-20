import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMoviescatalougeDetailsComponent } from './app-moviescatalouge-details.component';

describe('AppMoviescatalougeDetailsComponent', () => {
  let component: AppMoviescatalougeDetailsComponent;
  let fixture: ComponentFixture<AppMoviescatalougeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMoviescatalougeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMoviescatalougeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
