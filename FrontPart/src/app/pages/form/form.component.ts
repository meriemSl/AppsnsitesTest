import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private UserService : UserService, 
             private route : Router) { }

  ngOnInit(): void {
    this.model = new User();
  }
  genders = ['female', 'male', 'other'];

  model = new User() ;

  submitted = false;


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


  onSubmit() {
  console.log("test")
   console.log(this.model)
  this.UserService.AddUser(this.model).subscribe(
    (e) => {
      console.log(e);
      this.route.navigate(['/users']);
    },
    (error) => {
      console.log(error);
    }
  );
  this.submitted = true;
}

showFormControls(form: any) {
  return form && form.controls.name &&
  form.controls.name.value; // Dr. IQ
}

newUser() {
    this.model = new User();
  }

}