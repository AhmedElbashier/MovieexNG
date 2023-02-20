import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsudantvComponent } from './adminsudantv.component';

describe('AdminsudantvComponent', () => {
  let component: AdminsudantvComponent;
  let fixture: ComponentFixture<AdminsudantvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsudantvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsudantvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
