import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Proyecto } from '../modelos/proyecto';
import { TareasService } from './tareas.service';

@Injectable()
export class ProyectosService {
	private _proyectos: Proyecto[];
	private _proyectosSub = new BehaviorSubject(this._proyectos);
	private _proyectosObs: Observable<Proyecto[]>;

	private _api = "http://www.mocky.io/v2/5a2bf7b32f0000871103932f";

	constructor(private _http: HttpClient, private _tareaService: TareasService) {
	}

	getProyectos(): Proyecto[] {
		return this._proyectos;
	}

	getProyectosFromApi() {
		if (this._proyectos) {
			console.log('_proyectos');
			return of(this._proyectos);
		} else if (this._proyectosObs) {
			console.log('_proyectos obs');
			return this._proyectosObs;
		} else {
			console.log('_proyectos from api');
			this._proyectosObs = this._proyectosSub.asObservable();

			this._http.get<Proyecto[]>(this._api)
				.subscribe(data => {
					this._proyectos = data;
					this._proyectosSub.next(this._proyectos);
				},
					this.handleError
				);
				
			return this._proyectosObs;
		}
	}

	private handleError(error) {
		console.error(error);
		return Observable.throw(error || 'Server error');
	}

	public borrarProyecto(id) {
		this._proyectos = this._proyectos.filter(item => { return item.id != id ? true : false; });
		this._proyectosSub.next(this._proyectos);

	}

}
