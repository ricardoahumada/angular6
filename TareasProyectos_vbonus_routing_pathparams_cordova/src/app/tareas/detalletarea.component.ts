import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


import { Tarea } from '../modelos/tarea';

@Component({
  selector: 'detalle-tarea',
  templateUrl: './detalletarea.component.html'
})

export class DetalleTareaComponent implements OnInit{
  private _sub:any;
  public _tarea:Tarea;

  tareas:Tarea[]=[
  new Tarea(1,'Crea html',23,1),
  new Tarea(2,'Crea js',23,2),
  new Tarea(3,'Crea TS',23,1),
  new Tarea(4,'Llevar a producción',23,2),
  new Tarea(5,'Crea html',23,1),
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // Subscribe to route params
    this._sub = this.route.params.subscribe(params => {
      console.log('params',params);
      let tid = params['tid'];
      this._tarea=this.getATarea(tid);
    });
  }

  getATarea(tid:number):Tarea{
    return (this.tareas.filter(tarea => tarea.tid == tid)[0]);
  }

  goHome() {
    this.router.navigate(['']);
  }

}