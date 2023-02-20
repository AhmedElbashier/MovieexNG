import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlayscatalougeDetailsComponent } from './app-playscatalouge-details.component';

describe('AppPlayscatalougeDetailsComponent', () => {
  let component: AppPlayscatalougeDetailsComponent;
  let fixture: ComponentFixture<AppPlayscatalougeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPlayscatalougeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPlayscatalougeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
