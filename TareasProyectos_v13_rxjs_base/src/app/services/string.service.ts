import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  private $model = new Subject<string>();
  constructor() { }

  public fetchModels() {
    this.$model.next('Hola -1');
    this.sendInFuture();
    return this.$model;
  }

  sendInFuture(){
    let counter=0;
    setInterval(() => {
      this.$model.next('Hola '+counter++);
    }, 1000);
  }
}
