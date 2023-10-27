import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {  HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Tarea } from '../modelos/tarea';

@Injectable()
export class TareasService {
	private _tareas:Tarea[];
	private _tareasObs: Observable<Tarea[]>;

	private _api="http://www.mocky.io/v2/5a2bf6862f0000281103932b";
	
	constructor(private _http: HttpClient){
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

	borrarTareaByPid(pid) {
		if (this._tareas) this._tareas = this._tareas.filter(item => { return item.proyecto != pid ? true : false; })
	}

	getTareasFromApi(){
		if (this._tareas) {
			return of(this._tareas);
		} else if (this._tareasObs) {
			return this._tareasObs;
		} else {
			this._tareasObs = this._http.get<Tarea[]>(this._api)
				.pipe(
					tap(data => this._tareas = data),
					catchError(this.handleError)
				);
			return this._tareasObs;
		}
	}

	private handleError(error) {
		console.error(error);
		return Observable.throw(error || 'Server error');
	}

}
