import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProyectoTareasComponent } from './detalle-proyecto-tareas.component';

describe('DetalleProyectoTareasComponent', () => {
  let component: DetalleProyectoTareasComponent;
  let fixture: ComponentFixture<DetalleProyectoTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleProyectoTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleProyectoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
