import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSdPlayDialogComponent } from './app-sd-play-dialog.component';

describe('AppSdPlayDialogComponent', () => {
  let component: AppSdPlayDialogComponent;
  let fixture: ComponentFixture<AppSdPlayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSdPlayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSdPlayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
