import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../modelos/proyecto';

import { ProyectosService } from '../servicios/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[];
  _suscription: any;

  constructor(private _proyectosService: ProyectosService) { }

  ngOnInit() {
    this._suscription = this._proyectosService.getProyectosFromApi().subscribe(
      (proyectosfromapi: Proyecto[]) => {
        console.log('proyectosfromapi', proyectosfromapi);
        this.proyectos = proyectosfromapi;
      }
    );
  }

  ngOnDestroy() {
    this._suscription.unsubscribe();
  }

  borrarProyecto(pid) {
    this._proyectosService.borrarProyecto(pid);
  }

}
