import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginService } from './../../services/login.service'
import {AlertService} from 'src/app/services/alert.service'
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: LoginService,
        private ngAuthService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }


onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }
    else{
        this.accountService.SignIn(this.f.email.value , this.f.password.value )
    }

    this.loading = true;

}
GoogleAuth()
{

}
}
