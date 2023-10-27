import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Tarea } from '../modelos/tarea';

@Component({
  selector: 'boton-borrar',
  templateUrl: './botonborrar.component.html',
})

export class BotonBorrarComponent implements OnChanges{
	@Input() id: number;
	@Output() borrarClicked: EventEmitter<number> = new EventEmitter<number>();

	ngOnChanges(sc:any): void {
    // console.log('ngOnChanges',sc);
  }

  borraTarea(id:number) {
    console.log('Borrar ID:',id);
    this.borrarClicked.emit(id);
  }

}