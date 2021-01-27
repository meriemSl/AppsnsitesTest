import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }
  SignOut()
  { 
    this.loginService.SignOut();
  }
  
}
