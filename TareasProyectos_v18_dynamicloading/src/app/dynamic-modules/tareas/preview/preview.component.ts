import { Component, OnInit, Input } from '@angular/core';
import { TareasService } from '../../../servicios/tareas.service';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from '../../../modelos/tarea';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  private _sub: any;
  private _tarea: Tarea;
  @Input() tid:number=0;

  constructor(private route: ActivatedRoute, private _tareasService: TareasService) {
  }

  ngOnInit() {
    this._tarea = this._tareasService.getTareaById(this.tid);
  }

}
