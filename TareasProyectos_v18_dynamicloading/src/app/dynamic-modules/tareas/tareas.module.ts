import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';

import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

@NgModule({
  imports: [
    CommonModule,
    DynamicComponentLoaderModule.forChild(PreviewComponent),
  ],
  declarations: [PreviewComponent]
})
export class TareasModule { }
