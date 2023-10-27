import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'ocultarfiltro',
  templateUrl: './ocultarfiltro.component.html',
  styleUrls: ['./ocultarfiltro.component.css']
})
export class OcultarfiltroComponent implements OnInit {

  @Input()
  filtro;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  click() {
    this.filtro.toggle();
  }

}
