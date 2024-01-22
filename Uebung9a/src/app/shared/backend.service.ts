import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  backendUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    let endpoint = '/users'
    return this.http.get<User[]>(this.backendUrl + endpoint)
  }

  createOneUser(user: User): Observable<User> {
    let endpoint = '/users'
    return this.http.post<User>(this.backendUrl + endpoint, user)
  }
}
