import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminsudantvDetailsComponent } from './app-adminsudantv-details.component';

describe('AppAdminsudantvDetailsComponent', () => {
  let component: AppAdminsudantvDetailsComponent;
  let fixture: ComponentFixture<AppAdminsudantvDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminsudantvDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminsudantvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
