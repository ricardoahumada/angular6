import { Component } from '@angular/core';

import{LoginService} from './login.module/servicios/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	_isAutenticated:boolean=false;

	constructor(private _loginService:LoginService, private _router: Router){
	}

	ngOnInit(){
		this._loginService.isAuthenticated().subscribe(isauth=>{
			this._isAutenticated=isauth;
		});
		if(!this._isAutenticated) this._router.navigate(['/login']);
	}
}
