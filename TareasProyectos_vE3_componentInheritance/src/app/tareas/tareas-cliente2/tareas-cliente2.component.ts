import { Component, OnInit } from '@angular/core';
import { TareasComponent } from '../tareas.component';

@Component({
  selector: 'tareas-cliente2',
  templateUrl: './tareas-cliente2.component.html',
  styleUrls: ['./tareas-cliente2.component.css']
})
export class TareasCliente2Component extends TareasComponent {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
