import { Component, OnInit } from '@angular/core';
import { TareasComponent } from '../tareas.component';

@Component({
  selector: 'tareas-cliente1',
  templateUrl: './tareas-cliente1.component.html',
  styleUrls: ['./tareas-cliente1.component.css']
})
export class TareasCliente1Component extends TareasComponent{

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
