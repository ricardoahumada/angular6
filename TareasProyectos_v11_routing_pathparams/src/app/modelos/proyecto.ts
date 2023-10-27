export class Proyecto {

	constructor (private _pid:number,private _nombre:string, private _responsable?:number){
	}

	get pid(): number{return this._pid;}
	get nombre(): string{return this._nombre;}
	get responsable(): number{return this._responsable;}

	set pid(pid:number){this._pid=pid;}
	set nombre(nombre:string){this._nombre=nombre;}
	set responsable(responsable: number) { this._responsable = responsable;}
}
