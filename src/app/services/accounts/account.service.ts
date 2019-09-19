import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl: string = 'http://localhost:8080/rbr/account';
  private parans: HttpParams;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  doLoan() {
    return this.http.get(this.baseUrl + '/loan');
  }
}
