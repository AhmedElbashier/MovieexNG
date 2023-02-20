import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsudanmovieComponent } from './adminsudanmovie.component';

describe('AdminsudanmovieComponent', () => {
  let component: AdminsudanmovieComponent;
  let fixture: ComponentFixture<AdminsudanmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsudanmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsudanmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
