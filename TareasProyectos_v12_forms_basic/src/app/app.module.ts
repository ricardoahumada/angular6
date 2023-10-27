import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelformComponent } from './modelform/modelform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { Reactiveform2Component } from './reactiveform2/reactiveform2.component';
import { domainValidatorDirective } from './directives/domain-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModelformComponent,
    ReactiveformComponent,
    TemplateformComponent,
    Reactiveform2Component,
    domainValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
