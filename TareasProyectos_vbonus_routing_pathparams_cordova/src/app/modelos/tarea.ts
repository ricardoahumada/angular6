export class Tarea {

	constructor(private _tid: number, private _descripcion: string, private _tiempo: number, private _proyecto: number, private _responsable?: number) {
	}

	get tid(): number { return this._tid; }
	get descripcion(): string { return this._descripcion; }
	get tiempo(): number { return this._tiempo; }
	get proyecto(): number { return this._proyecto; }
	get responsable(): number { return this._responsable; }

	set tid(tid: number){this._tid=tid;}
	set descripcion(descripcion: string){this._descripcion=descripcion;}
	set tiempo(tiempo: number){this._tiempo=tiempo;}
	set proyecto(proyecto: number){this._proyecto=proyecto;}
	set responsable(responsable: number) { this._responsable = responsable; }

}
