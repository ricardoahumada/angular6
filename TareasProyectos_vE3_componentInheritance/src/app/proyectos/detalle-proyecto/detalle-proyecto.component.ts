import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Proyecto } from '../../modelos/proyecto';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {

  proyectos: Proyecto[] = [
    new Proyecto(1, 'Web Cliente a', 1),
    new Proyecto(2, 'App Cliente b', 2)
  ];
  proyecto:Proyecto;

  constructor(private _route:ActivatedRoute, private _router:Router) { }
  
  ngOnInit() {
    this._route.params.subscribe(params=>{
      this.proyecto = this.proyectos.find(aP => aP.pid==params['pid']);
    });
  }

}
