import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, from } from 'rxjs';
import { Usuario } from '../modelos/user';

@Injectable()
export class LoginService{
	private _isAuth:boolean=false;
	private _isAuthSubj=new BehaviorSubject(this._isAuth);
	private _isAuthObs= from(this._isAuthSubj);

	login(user:Usuario){
		// Conectamos con API
		this._isAuth=true;
		this._isAuthSubj.next(this._isAuth);
		return of(this._isAuth);
	}

	isAuthenticated():Observable<boolean>{
		return this._isAuthObs;
	}
}