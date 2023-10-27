import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasComponent } from './tareas/tareas.component';
import { DetalleTareaComponent } from './tareas/detalletarea.component';
import { AddTareaComponent } from './tareas/addtarea.component';

import { LoginComponent } from './login.module/login/login.component';

import { PageNotFoundComponent } from './commons/not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent, pathMatch: 'full' },
  { path: 'tareas/new', component: AddTareaComponent,pathMatch: 'full' },
  { path: 'tareas/:tid', component: DetalleTareaComponent,pathMatch: 'full' },
  { 
    path: 'proyectos', 
    loadChildren:'./proyectos.module/proyectos.module#ProyectosModule'
  },
  { path: '',redirectTo: '/tareas',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);