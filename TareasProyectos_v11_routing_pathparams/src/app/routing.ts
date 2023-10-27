import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasComponent } from './tareas/tareas.component';
import { DetalleTareaComponent } from './tareas/detalletarea.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { PageNotFoundComponent } from './commons/not-found.component';
import { DetalleProyectoComponent } from './proyectos/detalle-proyecto/detalle-proyecto.component';
import { DetalleProyectoUsuariosComponent } from './proyectos/detalle-proyecto/detalle-proyecto-usuarios/detalle-proyecto-usuarios.component';
import { DetalleProyectoTareasComponent } from './proyectos/detalle-proyecto/detalle-proyecto-tareas/detalle-proyecto-tareas.component';

const appRoutes: Routes = [
  { path: 'tareas', component: TareasComponent, pathMatch: 'full' },
  { path: 'tareas/:tid', component: DetalleTareaComponent, pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosComponent, pathMatch: 'full' },
  {
    path: 'proyectos/:pid', component: DetalleProyectoComponent,
    children: [
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
      { path: 'usuarios', component:DetalleProyectoUsuariosComponent, pathMatch: 'full' },
      { path: 'tareas', component:DetalleProyectoTareasComponent, pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);