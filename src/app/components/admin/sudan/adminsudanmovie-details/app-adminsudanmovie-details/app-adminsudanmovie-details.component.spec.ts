import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminsudanmovieDetailsComponent } from './app-adminsudanmovie-details.component';

describe('AppAdminsudanmovieDetailsComponent', () => {
  let component: AppAdminsudanmovieDetailsComponent;
  let fixture: ComponentFixture<AppAdminsudanmovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminsudanmovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminsudanmovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
