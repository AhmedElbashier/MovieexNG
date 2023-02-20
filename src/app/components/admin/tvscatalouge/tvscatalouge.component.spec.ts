import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvscatalougeComponent } from './tvscatalouge.component';

describe('TvscatalougeComponent', () => {
  let component: TvscatalougeComponent;
  let fixture: ComponentFixture<TvscatalougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvscatalougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvscatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
