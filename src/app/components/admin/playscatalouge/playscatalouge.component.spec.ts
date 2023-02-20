import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayscatalougeComponent } from './playscatalouge.component';

describe('PlayscatalougeComponent', () => {
  let component: PlayscatalougeComponent;
  let fixture: ComponentFixture<PlayscatalougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayscatalougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayscatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
