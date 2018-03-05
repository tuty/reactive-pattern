import { Http, Headers } from '@angular/http';
import { User } from './../shared/model/user';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

export const UNKNOWN_USER: User = {
  firstName: 'Unknown'
}

@Injectable()
export class UserService {

  private subject = new BehaviorSubject(UNKNOWN_USER)

  user$: Observable<User> = this.subject.asObservable();

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<User> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json')

    return this.http.post('/api/login', {
      email,
      password
    }, {headers})
      .map(res => res.json())
      .do(user => {this.subject.next(user)})
      .publishLast().refCount();
  }

}
