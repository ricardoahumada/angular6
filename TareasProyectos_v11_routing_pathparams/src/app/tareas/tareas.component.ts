import { Component, OnInit } from '@angular/core';

import {Tarea} from '../modelos/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  textoafiltrar='';

  constructor() { }

  ngOnInit() {
  }

  tareas:Tarea[]=[
  new Tarea(1,'Crea html',23,1,1),
  new Tarea(2,'Crea js',23,2,2),
  new Tarea(3,'Crea TS',23,1,3),
  new Tarea(4,'Llevar a producción',23,2,1),
  new Tarea(5,'Crea html',23,1,2),
  ];

  borrar(tid: string): void {
    console.log('Borrar tid de la lista:',tid);
    for (var i = 0; i < this.tareas.length; ++i) {
      if(this.tareas[i].tid== parseInt(tid) ) this.tareas.splice(i,1);
    }
  }

}
