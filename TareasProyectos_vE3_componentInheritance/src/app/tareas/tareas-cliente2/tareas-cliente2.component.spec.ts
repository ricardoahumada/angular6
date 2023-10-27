import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasCliente2Component } from './tareas-cliente2.component';

describe('TareasCliente2Component', () => {
  let component: TareasCliente2Component;
  let fixture: ComponentFixture<TareasCliente2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasCliente2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasCliente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
