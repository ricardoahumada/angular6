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

import { TareasAPIService } from './servicios/tareas.api.service';
import { ProyectosAPIService } from './servicios/proyectos.api.service';

import { HttpClientModule } from '@angular/common/http';
import { TareasStoreService } from './stores/tareas-store.service';
import { ProyectosStoreService } from './stores/proyectos-store.service';

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
    HttpClientModule
  ],
  providers: [TareasAPIService, TareasStoreService, ProyectosStoreService, ProyectosAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
