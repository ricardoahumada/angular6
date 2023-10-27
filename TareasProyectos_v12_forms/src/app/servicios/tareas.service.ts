import { Injectable } from '@angular/core';

import { Tarea } from '../modelos/tarea';

@Injectable()
export class TareasService {
	private _tareas: Tarea[] = [
		new Tarea(1, 'Crea html', 23, 1),
		new Tarea(2, 'Crea js', 23, 2),
		new Tarea(3, 'Crea TS', 23, 1),
		new Tarea(4, 'Llevar a producción', 23, 2),
		new Tarea(5, 'Crea html', 23, 1),
	];
	
	constructor(){
	}

	getTareas(){
		return this._tareas;
	}

	getTareaById(tid:number):Tarea{
		return (this._tareas.filter(tarea => tarea.tid == tid)[0]);
	}

	borrarTareaById(tid: number): void {
		console.log('Borrar tid de la lista:',tid);
		for (var i = 0; i < this._tareas.length; ++i) {
			if(this._tareas[i].tid == tid ) this._tareas.splice(i,1);
		}
	}

	addTarea(newtarea:Tarea){
		newtarea.tid=(new Date().getTime());
		this._tareas.push(newtarea);
		return true;
	}	

}
