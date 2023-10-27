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
import { DetalleProyectoComponent } from './proyectos/detalle-proyecto/detalle-proyecto.component';
import { DetalleProyectoUsuariosComponent } from './proyectos/detalle-proyecto/detalle-proyecto-usuarios/detalle-proyecto-usuarios.component';
import { DetalleProyectoTareasComponent } from './proyectos/detalle-proyecto/detalle-proyecto-tareas/detalle-proyecto-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ProyectosComponent,
    ListFilterPipe,
    BotonBorrarComponent,
    PageNotFoundComponent,
    DetalleTareaComponent,
    DetalleProyectoComponent,
    DetalleProyectoUsuariosComponent,
    DetalleProyectoTareasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
