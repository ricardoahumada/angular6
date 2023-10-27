import { Component, ViewChild, ElementRef, ViewChildren, QueryList, ContentChild, ContentChildren } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarToggleComponent } from './side-bar-toggle/side-bar-toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TareasProyectos';
  
  @ViewChild('container') containerRef:ElementRef;
  @ViewChild('sideBar') sideBarRef: ElementRef;
  @ViewChild(SideBarToggleComponent) sideBarToggleRef:SideBarToggleComponent;

  @ViewChildren('br') brChildren: QueryList<ElementRef>;
  @ViewChildren(SideBarComponent) sideBarChildren: QueryList<SideBarComponent>;
  
  
  @ContentChildren(SideBarComponent) sbContents: QueryList<SideBarComponent>;

  ngAfterViewInit(){
    console.log('Refs:', this.containerRef, this.sideBarRef, this.sideBarToggleRef, this.brChildren, this.sideBarChildren);

  }

  ngAfterContentInit(){
    console.log('Contents:', this.sbContents);

  }

}
