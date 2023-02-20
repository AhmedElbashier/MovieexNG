import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvscatalougeDetailsComponent } from './tvscatalouge-details.component';

describe('TvscatalougeDetailsComponent', () => {
  let component: TvscatalougeDetailsComponent;
  let fixture: ComponentFixture<TvscatalougeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvscatalougeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvscatalougeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
