import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/models/users/user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:8080/rbr/user';

  private parans: HttpParams;
  constructor(private http: HttpClient) { }

  getUser(numberAccount: number) {
    this.parans = new HttpParams();
    this.parans = this.parans.set('numberAccount', numberAccount.toString());
    const param = {params: this.parans};
    return this.http.get(this.baseUrl + '/cli', param);
  }

  getLogin(user: User): Observable<any> {
    console.log('entrei');
    return this.http.post(this.baseUrl + '/login', JSON.stringify(user));
  }

  getRegistration(user: User): Observable<any> {
    return this.http.post(this.baseUrl + '/reg', JSON.stringify(user));
  }

}
