import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  genders = ['female', 'male', 'other'];

  model = new User() ;

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


newUser() {
  this.model = new User();
}

showFormControls(form: any) {
  return form && form.controls.name &&
  form.controls.name.value; // Dr. IQ
}
}