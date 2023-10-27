import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Tarea } from '../modelos/tarea';
import {environment} from '../../environments/environment'

const API_URL=environment.apiUrl;

@Injectable()
export class TareasAPIService {
	private _tareas:Tarea[];

	
	constructor(private _http: HttpClient){
	}

	borrarTareaById(tid: number): boolean {
		console.log('Borrar tid de la lista:',tid);
		
		return true;
	}

	borrarTareaByPid(pid):boolean {
		if (this._tareas) {
			this._tareas = this._tareas.filter(item => { return item.proyecto != pid ? true : false; })
		}
		return true;
	}

	getTareasFromApi(){
		return  this._http.get<Tarea[]>(`${API_URL}/tareas`);
	}

	private handleError(error) {
		console.error(error);
		return Observable.throw(error || 'Server error');
	}

}
