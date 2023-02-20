import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsudantvDetailsComponent } from './adminsudantv-details.component';

describe('AdminsudantvDetailsComponent', () => {
  let component: AdminsudantvDetailsComponent;
  let fixture: ComponentFixture<AdminsudantvDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsudantvDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsudantvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
