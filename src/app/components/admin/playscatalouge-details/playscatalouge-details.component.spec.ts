import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayscatalougeDetailsComponent } from './playscatalouge-details.component';

describe('PlayscatalougeDetailsComponent', () => {
  let component: PlayscatalougeDetailsComponent;
  let fixture: ComponentFixture<PlayscatalougeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayscatalougeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayscatalougeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
