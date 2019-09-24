import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/users/user';
import { Observable, throwError } from 'rxjs';
import { Session } from 'src/app/request/session/session';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:8080/rbr/user';
  user: User;
  private parans: HttpParams;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  getUser(numberAccount: number): Observable<any> {
    this.headers = new HttpHeaders();
    const token = localStorage.getItem('access_token');
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8')
                               .set('Authorization', 'Bearer ' + token);
    this.parans = new HttpParams();
    this.parans = this.parans.set('numberAccount', numberAccount.toString());

    return this.http.get(this.baseUrl + '/cli', {headers: this.headers, params: this.parans});
  }

  getLogin(user: User): Observable<any> {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:8080/authenticate', JSON.stringify(user), {headers: this.headers});
  }

  getRegistration(user: User): Observable<any> {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + '/reg', JSON.stringify(user), {headers: this.headers});
  }

  setterUser(user: User) {
    this.user = user;
  }

  getterUser() {
    return this.user;
  }

  userSession(user: User): Session {
    const session = new Session();
    session.name = user.name;
    session.cpf = user.cpf;
    session.numberAccount = user.account.numberAccount;
    session.birthDate = user.birthDate;

    return session;
  }

}
