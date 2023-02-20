import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTvsComponent } from './searchtvs.component';

describe('SearchTvsComponent', () => {
  let component: SearchTvsComponent;
  let fixture: ComponentFixture<SearchTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
