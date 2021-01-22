import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import { User } from '../models/User';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient , public jwtHelper : JwtHelperService) { }

  
  login(user: User): any {
    return this.http.post<any>(`${environment.BACKEND}/${environment.LOGIN_ENDPOINT}`, user);
  }
//  destroySession(): void {
//    localStorage.removeItem(environment.SESSION);
//  }
//  logout(): void {
//    this.destroySession();
//  }
  
//   reLogin(session: Session): boolean {
//    if (session !== null) {
//      const refresh = {
//        refresh_token: session.refresh_token
//      };
//      this.http.post<any>(`${environment.BACKEND}/${environment.REFRESH_TOKEN}`, refresh).subscribe((e) => {
//        session.token = e.token;
//        session.refresh_token = e.refresh_token;
//        this.setSession(session);
//      });
//    }
//    console.log('refresh done');
//    return !this.jwtHelper.isTokenExpired(session.token);
//  }

//  setSession(payload: Session): void {
//    localStorage.setItem(environment.SESSION, JSON.stringify(payload));
//  }

//  getSession(): Session {
//    return JSON.parse(localStorage.getItem(environment.SESSION));
//  }

//  isLoggedIn() {
//    const session = this.getSession();
//    console.log(session)
//    return session !== null ? !this.jwtHelper.isTokenExpired(session.token) : false;
//  }
  
  




}
