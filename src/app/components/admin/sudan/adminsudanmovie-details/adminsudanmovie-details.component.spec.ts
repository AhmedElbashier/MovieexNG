import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsudanmovieDetailsComponent } from './adminsudanmovie-details.component';

describe('AdminsudanmovieDetailsComponent', () => {
  let component: AdminsudanmovieDetailsComponent;
  let fixture: ComponentFixture<AdminsudanmovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsudanmovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsudanmovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
