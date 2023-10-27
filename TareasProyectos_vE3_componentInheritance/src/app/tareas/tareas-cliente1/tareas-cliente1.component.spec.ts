import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasCliente1Component } from './tareas-cliente1.component';

describe('TareasCliente1Component', () => {
  let component: TareasCliente1Component;
  let fixture: ComponentFixture<TareasCliente1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasCliente1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasCliente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
