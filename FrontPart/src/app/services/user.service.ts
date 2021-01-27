import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {}
  
  AddUser(user: User): Observable<User> {
      return this.http.post<User>(`${environment.BACKEND}/${environment.User_ENDPOINT}`, user);
  }  
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(
      `${environment.BACKEND}/${environment.User_ENDPOINT}/${user.uid}`,
      user
    );
  }
  getAllUser() {
    return this.http
      .get(`${environment.BACKEND}/${environment.Users_ENDPOINT}`)
      
  }
  getUser(id: number) {
    return this.http
      .get(`${environment.BACKEND}/${environment.User_ENDPOINT}/${id}`)
      .toPromise();
  }
  delete(id) {
    return this.http
      .delete(`${environment.BACKEND}/${environment.User_ENDPOINT}/${id}`)
  }
}
