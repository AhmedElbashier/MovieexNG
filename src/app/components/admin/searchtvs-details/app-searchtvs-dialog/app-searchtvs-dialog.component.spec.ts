import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchTvsDialogComponent } from './app-searchtvs-dialog.component';

describe('AppSearchTvsDialogComponent', () => {
  let component: AppSearchTvsDialogComponent;
  let fixture: ComponentFixture<AppSearchTvsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearchTvsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchTvsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
