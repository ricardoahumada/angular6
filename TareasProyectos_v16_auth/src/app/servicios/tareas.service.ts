import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {  HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Tarea } from '../modelos/tarea';
import { SessionService } from './session.service';

const API_URL = environment.apiUrl;

@Injectable()
export class TareasService {
	private _tareas:Tarea[];
	private _tareasObs: Observable<Tarea[]>;

	constructor(private _http: HttpClient, private session:SessionService){
	}

	getTareas(){
		return this._tareas;
	}

	getTareaById(id:number):Tarea{
		return (this._tareas.filter(tarea => tarea.id == id)[0]);
	}

	borrarTareaById(id: number): void {
		console.log('Borrar id de la lista:',id);
		for (var i = 0; i < this._tareas.length; ++i) {
			if(this._tareas[i].id == id ) this._tareas.splice(i,1);
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
			const httpOptions = this.getRequestOptions();
			this._tareasObs = this._http.get<Tarea[]>(API_URL + '/tareas', httpOptions)
				.pipe(
					tap(data => this._tareas = data),
					catchError(this.handleError)
				);
			return this._tareasObs;
		}
	}

	private handleError(error) {
		console.error(error);
		return throwError(error || 'Server error');
	}

	private getRequestOptions() {	
		return {
			headers: new HttpHeaders({
				'Authorization': 'Bearer ' + this.session.accessToken
			})
		};

	}

}
