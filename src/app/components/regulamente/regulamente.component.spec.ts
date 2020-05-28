import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulamenteComponent } from './regulamente.component';

describe('RegulamenteComponent', () => {
  let component: RegulamenteComponent;
  let fixture: ComponentFixture<RegulamenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulamenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
