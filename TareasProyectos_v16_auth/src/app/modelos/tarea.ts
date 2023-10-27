export class Tarea {

	id:number;
	descripcion:string;
	tiempo:number;
	proyecto:number;

	constructor (id:number,descripcion:string,tiempo:number,proyecto:number){
		this.id=id;
		this.descripcion=descripcion;
		this.tiempo=tiempo;
		this.proyecto=proyecto;
	}
}
