import { Injectable } from '@angular/core';
import { ProyectosAPIService } from '../servicios/proyectos.api.service';
import { Proyecto } from '../modelos/proyecto';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { TareasStoreService } from './tareas-store.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectosStoreService {

  private _proyectos: Proyecto[];
  private $proyectosObs: Observable<Proyecto[]>;
  private $proyectosSub = new BehaviorSubject(this._proyectos);


  constructor(private _proyectosAPI: ProyectosAPIService,
    private _tareasStore:TareasStoreService) { }

  getProyectos(): Observable<Proyecto[]> {
    if (this._proyectos) {
      console.log('_proyectos');
      return of(this._proyectos);
    } else if (this.$proyectosObs) {
      console.log('_proyectos obs');
      return this.$proyectosObs;
    } else {
      console.log('_proyectos from api');
      this.$proyectosObs = this.$proyectosSub.asObservable();

      this._proyectosAPI.getProyectosFromApi()
        .subscribe(
          data => {
            this._proyectos = data;
            this.$proyectosSub.next(this._proyectos);
          },
          this.handleError
        );

      return this.$proyectosObs;
    }
  }

  borrarProyecto(pid: number): Observable<boolean> {
    this._proyectos = this._proyectos.filter(aP =>aP.id != pid);
    this._tareasStore.borrarTareasByProyecto(pid).subscribe();
    this.$proyectosSub.next(this._proyectos);
    return of(true);
  }

  private handleError(error) {
    console.error(error);
    return throwError(error || 'Server error');
  }
}
