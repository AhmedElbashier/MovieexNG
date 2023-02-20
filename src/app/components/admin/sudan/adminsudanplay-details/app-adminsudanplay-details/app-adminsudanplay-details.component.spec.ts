import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminsudanplayDetailsComponent } from './app-adminsudanplay-details.component';

describe('AppAdminsudanplayDetailsComponent', () => {
  let component: AppAdminsudanplayDetailsComponent;
  let fixture: ComponentFixture<AppAdminsudanplayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminsudanplayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminsudanplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
