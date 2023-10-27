import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';

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
import { AddTareaComponent } from './tareas/addtarea.component';
import { AddProyectoComponent } from './proyectos/addproyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ProyectosComponent,
    ListFilterPipe,
    BotonBorrarComponent,
    PageNotFoundComponent,
    DetalleTareaComponent,
    AddTareaComponent,
    AddProyectoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [TareasService, ProyectosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
