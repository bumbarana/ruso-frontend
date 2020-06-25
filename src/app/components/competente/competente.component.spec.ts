import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenteComponent } from './competente.component';

describe('CompetenteComponent', () => {
  let component: CompetenteComponent;
  let fixture: ComponentFixture<CompetenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
