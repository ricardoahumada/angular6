import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Proyecto } from '../modelos/proyecto';
import { environment } from '../../environments/environment'

const API_URL = environment.apiUrl;

@Injectable()
export class ProyectosAPIService {

	constructor(private _http: HttpClient ) {
	}

	getProyectosFromApi(): Observable<Proyecto[]> {
		return this._http.get<Proyecto[]>(`${API_URL}/proyectos`);
	}

	private handleError(error) {
		console.error(error);
		return Observable.throw(error || 'Server error');
	}	

}
