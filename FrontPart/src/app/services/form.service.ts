import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FormService {

    constructor(private http: HttpClient) {}

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(
      `${environment.BACKEND}/${environment.User_ENDPOINT}/${user.id}`,
      user
    );
  }
  getAllUser() {
    return this.http
      .get(`${environment.BACKEND}/${environment.User_ENDPOINT}`)
      
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
