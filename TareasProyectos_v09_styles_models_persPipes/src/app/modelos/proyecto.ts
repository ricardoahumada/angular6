export class Proyecto {

	constructor (private _pid:number,private _nombre:string, private _fecha:Date, private _coste:number){
	}

	get pid():number{return this._pid;}
	get nombre():string{return this._nombre;}
	get fecha():Date{return this._fecha;}
	get coste(): number{return this._coste;}

	set pid(pid:number){this._pid=pid;}
	set nombre(nombre:string){this._nombre=nombre;}
	set fecha(fecha:Date){this._fecha=fecha;}
	set coste(coste: number) { this._coste = coste;}
}
