import { Component, OnInit, ViewChild } from '@angular/core';

class Signup {
  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public email: string = "",
    public password: string = "",
    public language: string = ""
  ) { }
}

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  model: Signup = new Signup();
  @ViewChild("f") form: any;
  firstName: string = "";

  langs: string[] = ["English", "French", "German"];

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
