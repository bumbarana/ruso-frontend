import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurseComponent } from './burse.component';

describe('BurseComponent', () => {
  let component: BurseComponent;
  let fixture: ComponentFixture<BurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
