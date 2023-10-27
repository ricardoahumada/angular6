import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }    from '@angular/forms';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AddProyectoComponent } from './proyectos/addproyecto.component';
import { ProyectosService } from './servicios/proyectos.service';
import { HttpClientModule } from '@angular/common/http';

import { ListFilterPipe } from './pipes/filter.pipe';

import { ProyectosModuleRouting } from './proyectos.module-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProyectosModuleRouting,
    FormsModule
  ],
  exports:[
  	ProyectosComponent,AddProyectoComponent
  ],
  declarations: [ProyectosComponent,AddProyectoComponent,ListFilterPipe],
  providers:[ProyectosService]
})
export class ProyectosModule { 
	static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProyectosModule,
      providers: [ProyectosService]
    }
  }
}
