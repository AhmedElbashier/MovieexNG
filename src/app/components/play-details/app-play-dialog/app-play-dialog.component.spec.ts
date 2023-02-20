import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlayDialogComponent } from './app-play-dialog.component';

describe('AppPlayDialogComponent', () => {
  let component: AppPlayDialogComponent;
  let fixture: ComponentFixture<AppPlayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPlayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPlayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
