import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { BotonBorrarComponent } from './tareas/botonborrar.component';
import { PageNotFoundComponent } from './commons/not-found.component';
import { DetalleTareaComponent } from './tareas/detalletarea.component';

import { ListFilterPipe } from './commons/filter.pipe';

import { routing } from './routing';

import { TareasService } from './servicios/tareas.service';
import { ProyectosService } from './servicios/proyectos.service';

import { HttpClientModule } from '@angular/common/http';

import { DynamicComponentManifest } from './dynamic-component-loader/dynamic-component-manifest';
import { DynamicComponentLoaderModule } from './dynamic-component-loader/dynamic-component-loader.module';

const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'preview',
    path: 'tareas-preview', // some globally-unique identifier, used internally by the router
    loadChildren: './dynamic-modules/tareas/tareas.module#TareasModule',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ProyectosComponent,
    ListFilterPipe,
    BotonBorrarComponent,
    PageNotFoundComponent,
    DetalleTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    DynamicComponentLoaderModule.forRoot(manifests)
  ],
  providers: [TareasService, ProyectosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
