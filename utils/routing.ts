import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasComponent } from './tareas/tareas.component';

import { PageNotFoundComponent } from './commons/not-found.component';

const appRoutes: Routes = [
  { path: 'tareas', component: TareasComponent, pathMatch: 'full' },
  { path: '',redirectTo: '/tareas',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);