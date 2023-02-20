import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsudanmovieComponent } from './addsudanmovie.component';

describe('AddsudanmovieComponent', () => {
  let component: AddsudanmovieComponent;
  let fixture: ComponentFixture<AddsudanmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsudanmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsudanmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
