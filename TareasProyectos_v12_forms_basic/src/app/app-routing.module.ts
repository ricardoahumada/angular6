import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelformComponent } from './modelform/modelform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Reactiveform2Component } from './reactiveform2/reactiveform2.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:ModelformComponent},
  { path: 'reactive', pathMatch: 'full', component: ReactiveformComponent },
  { path: 'reactive2', pathMatch: 'full', component: Reactiveform2Component },
  { path: 'template', pathMatch: 'full', component: TemplateformComponent },
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
