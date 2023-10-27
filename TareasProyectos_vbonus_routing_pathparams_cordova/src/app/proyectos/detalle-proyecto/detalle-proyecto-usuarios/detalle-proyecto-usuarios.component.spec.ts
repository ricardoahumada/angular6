import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProyectoUsuariosComponent } from './detalle-proyecto-usuarios.component';

describe('DetalleProyectoUsuariosComponent', () => {
  let component: DetalleProyectoUsuariosComponent;
  let fixture: ComponentFixture<DetalleProyectoUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleProyectoUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleProyectoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
