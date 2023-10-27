import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @HostBinding('class.is-open')
  isOpen = false;

  @Output() cambia:EventEmitter<string>=new EventEmitter();
  textoafiltrar = '';

  constructor() { }

  ngOnInit() {
  }
  
  toggle() {
    this.isOpen = !this.isOpen;
  }

  emitChange(){
    this.cambia.emit(this.textoafiltrar);
  }
}
