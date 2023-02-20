import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTvsDetailsComponent } from './searchtvs-details.component';

describe('SearchTvsDetailsComponent', () => {
  let component: SearchTvsDetailsComponent;
  let fixture: ComponentFixture<SearchTvsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTvsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTvsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
