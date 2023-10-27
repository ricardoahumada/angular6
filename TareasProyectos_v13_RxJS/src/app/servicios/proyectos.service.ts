import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';

@Injectable()
export class ProyectosService {
	private _proyectos: Proyecto[] = [
		new Proyecto(1, 'Web Cliente a'),
		new Proyecto(2, 'App Cliente b')
	];
	
	constructor(){
	}

	getProyectos():Proyecto[]{
		return this._proyectos;
	}

	
	addProyecto(newproyecto:Proyecto){
		newproyecto.pid=(new Date().getTime());
		this._proyectos.push(newproyecto);
		return true;
	}
}
