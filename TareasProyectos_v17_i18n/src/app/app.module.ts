import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { SignInComponent } from './sign-in/sign-in.component';
import { ApiService } from './servicios/api.service';
import { AuthService } from './servicios/auth.service';
import { SessionService } from './servicios/session.service';
import { TareasResolver } from './guards/tareas.resolver';
import { CanActivateGuard } from './guards/can-activate.guard';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ProyectosComponent,
    ListFilterPipe,
    BotonBorrarComponent,
    PageNotFoundComponent,
    DetalleTareaComponent,
    SignInComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [TareasService, ProyectosService, ApiService, AuthService,SessionService, CanActivateGuard, TareasResolver],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
