import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { BotonBorrarComponent } from './tareas/botonborrar/botonborrar.component';

import { ListFilterPipe } from './commons/filter.pipe';
import { OcultarfiltroComponent } from './tareas/ocultarfiltro/ocultarfiltro.component';
import { FiltroComponent } from './tareas/filtro/filtro.component';


@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ProyectosComponent,
    ListFilterPipe,
    BotonBorrarComponent,
    OcultarfiltroComponent,
    FiltroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
