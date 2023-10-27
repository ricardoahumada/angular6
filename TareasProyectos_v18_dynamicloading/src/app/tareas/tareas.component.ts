import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

import {Tarea} from '../modelos/tarea';

import { TareasService } from '../servicios/tareas.service';
import { DynamicComponentLoader } from '../dynamic-component-loader/dynamic-component-loader.service';
import { PreviewComponent } from '../dynamic-modules/tareas/preview/preview.component';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  textoafiltrar='';
  tareas:Tarea[];

  @ViewChild('previewOutlet', { read: ViewContainerRef }) previewOutlet: ViewContainerRef;

  constructor(private _tareasService: TareasService, private dynamicComponentLoader: DynamicComponentLoader) { }

  ngOnInit() {
    this._tareasService.getTareasFromApi().subscribe(
      (tareasfromapi:Tarea[]) => {this.tareas = tareasfromapi;}
    );
  }

  borrar(tid: number): void {
   this._tareasService.borrarTareaById(tid); 
  }

  loadComponent(tid:number) {
    this.dynamicComponentLoader
      .getComponentFactory<PreviewComponent>('preview')
      .subscribe(componentFactory => {
        console.log('componentFactory:',componentFactory);
        this.previewOutlet.clear();
        const ref = this.previewOutlet.createComponent(componentFactory);
        ref.instance.tid=tid;
        ref.changeDetectorRef.detectChanges();
      }, error => {
        console.warn(error);
      });
  }

}
