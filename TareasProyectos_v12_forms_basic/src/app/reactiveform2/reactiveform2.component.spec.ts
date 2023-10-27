import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveform2Component } from './reactiveform2.component';

describe('Reactiveform2Component', () => {
  let component: Reactiveform2Component;
  let fixture: ComponentFixture<Reactiveform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactiveform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactiveform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
