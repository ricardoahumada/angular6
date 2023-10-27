import { Component, OnInit } from '@angular/core';

import {Tarea} from '../modelos/tarea';

import { TareasService } from '../servicios/tareas.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  textoafiltrar='';
  tareas:Tarea[];

  constructor(private _tareasService:TareasService) { }

  ngOnInit() {
    this.tareas = this._tareasService.getTareas();
  }

  borrar(tid: number): void {
   this._tareasService.borrarTareaById(tid); 
  }

}
