import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/users/user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TransferRequest } from 'src/app/request/transfer-request';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:8080/rbr/user';
  user: User;
  private parans: HttpParams;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  getUser(numberAccount: number) {
    this.parans = new HttpParams();
    this.parans = this.parans.set('numberAccount', numberAccount.toString());
    const param = {params: this.parans};
    return this.http.get(this.baseUrl + '/cli', param);
  }

  getLogin(user: User): Observable<any> {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + '/login', JSON.stringify(user), {headers: this.headers});
  }

  getRegistration(user: User): Observable<any> {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log(user);
    return this.http.post(this.baseUrl + '/reg', JSON.stringify(user), {headers: this.headers});
  }

  doTransfer(transfer: TransferRequest) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + '/transfer', JSON.stringify(transfer), {headers: this.headers});
  }

  setterUser(user: User) {
    this.user = user;
  }

  getterUser() {
    return this.user;
  }

}
