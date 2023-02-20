import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTvscatalougeDetailsComponent } from './app-tvscatalouge-details.component';

describe('AppTvscatalougeDetailsComponent', () => {
  let component: AppTvscatalougeDetailsComponent;
  let fixture: ComponentFixture<AppTvscatalougeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTvscatalougeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTvscatalougeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
