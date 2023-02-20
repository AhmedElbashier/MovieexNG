import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsudanplayComponent } from './addsudanplay.component';

describe('AddsudanplayComponent', () => {
  let component: AddsudanplayComponent;
  let fixture: ComponentFixture<AddsudanplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsudanplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsudanplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
