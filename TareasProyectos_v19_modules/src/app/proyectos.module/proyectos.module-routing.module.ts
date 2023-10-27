import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectosComponent } from './proyectos/proyectos.component';
import { AddProyectoComponent } from './proyectos/addproyecto.component';

export const proyectRoutes: Routes = [
	{path:'',component:ProyectosComponent},
	{path:'new',component:AddProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(proyectRoutes)],
  exports: [RouterModule]
})
export class ProyectosModuleRouting { }