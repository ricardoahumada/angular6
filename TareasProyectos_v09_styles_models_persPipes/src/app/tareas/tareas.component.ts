import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Tarea } from '../modelos/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  textoafiltrar = '';

  @ViewChild("tablaTareas") tableEl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.tableEl);
  }

  tareas: Tarea[] = [
    new Tarea(1, 'Crea html', 23, 1),
    new Tarea(2, 'Crea js', 23, 2),
    new Tarea(3, 'Crea TS', 23, 1),
    new Tarea(4, 'Llevar a producción', 23, 2),
    new Tarea(5, 'Crea html', 23, 1),
  ];

  borrar(tid: number): void {
    console.log('Borrar tid de la lista:', tid,this.tableEl);
    this.tareas=this.tareas.filter(aT=>aT.tid!==tid);   
  }

  filtra(texto:string){
    this.textoafiltrar=texto;
  }

}
