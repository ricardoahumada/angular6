import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasComponent } from './tareas/tareas.component';
import { DetalleTareaComponent } from './tareas/detalletarea.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { PageNotFoundComponent } from './commons/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TareasResolver } from './guards/tareas.resolver';
import { CanActivateGuard } from './guards/can-activate.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  {
    path: 'tareas', 
    component: TareasComponent, 
    canActivate: [CanActivateGuard], 
    resolve: {tareas: TareasResolver} },
  { path: 'tareas/:tid', component: DetalleTareaComponent, pathMatch: 'full', canActivate: [CanActivateGuard] },
  { path: 'proyectos', component: ProyectosComponent, canActivate: [CanActivateGuard] },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);