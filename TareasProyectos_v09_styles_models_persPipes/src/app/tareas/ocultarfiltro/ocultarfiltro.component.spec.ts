import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcultarfiltroComponent } from './ocultarfiltro.component';

describe('OcultarfiltroComponent', () => {
  let component: OcultarfiltroComponent;
  let fixture: ComponentFixture<OcultarfiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcultarfiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcultarfiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
