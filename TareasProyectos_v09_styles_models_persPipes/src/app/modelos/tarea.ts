export class Tarea {

	constructor (private _tid:number,private _descripcion:string,private _tiempo:number,private _proyecto:number){
	}

	get tid(): number{return this._tid;}
	get descripcion(): string{return this._descripcion;}
	get tiempo(): number{return this._tiempo;}
	get proyecto(): number{return this._proyecto;}

	set tid(tid: number) { this._tid=tid; }
	set descripcion(descripcion: string) { this._descripcion=descripcion; }
	set tiempo(tiempo: number) { this._tiempo=tiempo; }
	set proyecto(proyecto: number) { this._proyecto=proyecto; }

}
