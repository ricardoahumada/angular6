import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  searchField: FormControl;
  searches: string[] = [];

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(term => {
        this.searches.push(term);
      });
  }
}
