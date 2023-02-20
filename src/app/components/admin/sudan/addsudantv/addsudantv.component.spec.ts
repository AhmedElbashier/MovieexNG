import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsudantvComponent } from './addsudantv.component';

describe('AddsudantvComponent', () => {
  let component: AddsudantvComponent;
  let fixture: ComponentFixture<AddsudantvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsudantvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsudantvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
