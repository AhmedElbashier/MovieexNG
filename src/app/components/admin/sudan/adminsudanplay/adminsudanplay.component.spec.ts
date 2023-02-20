import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsudanplayComponent } from './adminsudanplay.component';

describe('AdminsudanplayComponent', () => {
  let component: AdminsudanplayComponent;
  let fixture: ComponentFixture<AdminsudanplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsudanplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsudanplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
