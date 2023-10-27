import { Injectable } from '@angular/core';
import { TareasAPIService } from '../servicios/tareas.api.service';
import { Observable, of, throwError } from 'rxjs';
import { Tarea } from '../modelos/tarea';
import { catchError, tap } from 'rxjs/operators';
import { ProyectosStoreService } from './proyectos-store.service';

@Injectable()
export class TareasStoreService {

  private _tareas: Tarea[];
  private _tareasObs: Observable<Tarea[]>;


  constructor(
    private _tareasAPIService: TareasAPIService
  ) {
  }

  getTareas(): Observable<Tarea[]> {
    if (this._tareas) {
      return of(this._tareas);
    } else if (this._tareasObs) {
      return this._tareasObs;
    } else {
      this._tareasObs = this._tareasAPIService.getTareasFromApi().pipe(
        tap(data => this._tareas = data),
        catchError(this.handleError)
      );
      return this._tareasObs;
    }
  }

  borrarTareaById(tid): Observable<boolean> {
    for (var i = 0; i < this._tareas.length; ++i) {
      if (this._tareas[i].id == tid) this._tareas.splice(i, 1);
    }
    return of(this._tareasAPIService.borrarTareaById(tid));
  }

  borrarTareasByProyecto(pid: number): Observable<boolean> {
    this._tareas=this._tareas.filter(aT=>aT.proyecto!=pid);
    return of(true);
  }

  private handleError(error) {
    console.error(error);
    return throwError(error || 'Server error');
  }
}
