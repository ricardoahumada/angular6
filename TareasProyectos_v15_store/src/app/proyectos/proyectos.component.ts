import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../modelos/proyecto';

import { ProyectosStoreService } from '../stores/proyectos-store.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[];
  _suscription: any;

  constructor(private _proyectosStore: ProyectosStoreService) { }

  ngOnInit() {
    this._suscription = this._proyectosStore.getProyectos().subscribe(
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
    this._proyectosStore.borrarProyecto(pid).subscribe();
  }

}
