import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { ProyectosComponent } from './proyectos.module/proyectos/proyectos.component';
import { BotonBorrarComponent } from './tareas/botonborrar.component';
import { PageNotFoundComponent } from './commons/not-found.component';
import { DetalleTareaComponent } from './tareas/detalletarea.component';

import { ListFilterPipe } from './commons/filter.pipe';

import { routing } from './routing';

import { TareasService } from './servicios/tareas.service';

import { HttpClientModule } from '@angular/common/http';
import { AddTareaComponent } from './tareas/addtarea.component';

import { LoginModule } from './login.module/login.module';
import { ProyectosModule } from './proyectos.module/proyectos.module';


@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ListFilterPipe,
    BotonBorrarComponent,
    PageNotFoundComponent,
    DetalleTareaComponent,
    AddTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    LoginModule.forRoot(),
    ProyectosModule.forRoot()
  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
