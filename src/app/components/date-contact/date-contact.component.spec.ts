import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateContactComponent } from './date-contact.component';

describe('DateContactComponent', () => {
  let component: DateContactComponent;
  let fixture: ComponentFixture<DateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
