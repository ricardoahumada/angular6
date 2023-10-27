import { Component, OnInit } from '@angular/core';

import {Tarea} from '../modelos/tarea';

import { TareasService } from '../servicios/tareas.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  textoafiltrar='';
  tareas:Tarea[];
  private $tareasSuscription:Subscription;

  constructor(private _tareasService:TareasService) { }

  ngOnInit() {
    this._tareasService.getTareas().subscribe(theTareas =>{
      this.tareas = theTareas;
    });
  }

  borrar(tid: number): void {
   this._tareasService.borrarTareaById(tid); 
  }

  ngDestroy(){
    if(this.$tareasSuscription) this.$tareasSuscription.unsubscribe();
  }

}
