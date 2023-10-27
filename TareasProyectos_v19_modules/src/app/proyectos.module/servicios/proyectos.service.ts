import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {  HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Proyecto } from '../../modelos/proyecto';

@Injectable()
export class ProyectosService {
	private _proyectos:Proyecto[];
	private _api="http://www.mocky.io/v2/5a2bf7b32f0000871103932f";
	private _observable: Observable<any>;

	constructor(private _http: HttpClient){
	}

	getProyectos():Proyecto[]{
		return this._proyectos;
	}

	getProyectosFromApi():Observable<Proyecto[]>{
		return this._http.get<Proyecto[]>(this._api).pipe(
			tap(data=>{this._proyectos=data;}),
			catchError(this.handleError)
		);
	}

	private handleError(error: Response) {
		console.error(error);
		return throwError(error.json() || 'Server error');
	}

	getProyectosFromApiStore() {
		if(this._proyectos) {
			// if `data` is available just return it as `Observable`
			console.log('data is available ...');
			return of(this._proyectos);
		} else if(this._observable) {
			// if `this.observable` is set then the request is in progress return the `Observable` for the ongoing request
			console.log('observable is set, request in progress ...');
			return this._observable;
		} else {
			// create the request, store the `Observable` for subsequent subscribers
			console.log('no data, set request and update observable ...');
			this._observable = this.getProyectosFromApi();
			return this._observable;
		}
	}

	addProyecto(newproyecto:Proyecto){
		newproyecto.pid=(new Date().getTime());
		this._proyectos.push(newproyecto);
		return of(true);
	}



	
}
