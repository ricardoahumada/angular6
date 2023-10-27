export class User {
    constructor(private _uid: number, private _name: string, private _email: string) {
    }

    get uid(): number{return this._uid;}
    get name(): string{return this._name;}
    get email(): string{return this._email;}

    set uid(uid: number){this._uid=uid;}
    set name(name: string){this._name=name;}
    set email(email: string){this._email=email;}

}