import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsudanplayDetailsComponent } from './adminsudanplay-details.component';

describe('AdminsudanplayDetailsComponent', () => {
  let component: AdminsudanplayDetailsComponent;
  let fixture: ComponentFixture<AdminsudanplayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsudanplayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsudanplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
