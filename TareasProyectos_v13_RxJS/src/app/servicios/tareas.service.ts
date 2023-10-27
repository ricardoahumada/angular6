import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


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
	
	private $tareasObs=new BehaviorSubject<Tarea[]>(this._tareas);

	constructor(){
	}

	getTareas(){
		return this.$tareasObs;
	}

	getTareaById(tid:number):Tarea{
		return (this._tareas.filter(tarea => tarea.tid == tid)[0]);
	}

	borrarTareaById(tid: number): void {		
		this._tareas=this._tareas.filter(T=>T.tid!=tid);
		this.$tareasObs.next(this._tareas);
	}

	addTarea(newtarea:Tarea):boolean{
		newtarea.tid=(new Date().getTime());
		this._tareas.push(newtarea);
		return true;
	}	

}
