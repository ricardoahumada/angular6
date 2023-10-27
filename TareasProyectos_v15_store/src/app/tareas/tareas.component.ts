import { Component, OnInit } from '@angular/core';

import {Tarea} from '../modelos/tarea';
import { TareasStoreService } from '../stores/tareas-store.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  textoafiltrar='';
  tareas:Tarea[];
  $tareasObs:Subscription;

  constructor(private _tareasStore:TareasStoreService) { }

  ngOnInit() {
    this.$tareasObs=this._tareasStore.getTareas().subscribe(
      (tareasfromapi:Tarea[]) => {this.tareas = tareasfromapi;}
    );
  }

  borrar(tid: number): void {
    this._tareasStore.borrarTareaById(tid).subscribe(); 
  }

  ngOnDestroy(){
    this.$tareasObs.unsubscribe();
  }

}
