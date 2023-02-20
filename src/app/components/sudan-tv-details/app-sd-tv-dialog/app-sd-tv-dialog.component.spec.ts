import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSdTvDialogComponent } from './app-sd-tv-dialog.component';

describe('AppSdTvDialogComponent', () => {
  let component: AppSdTvDialogComponent;
  let fixture: ComponentFixture<AppSdTvDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSdTvDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSdTvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
