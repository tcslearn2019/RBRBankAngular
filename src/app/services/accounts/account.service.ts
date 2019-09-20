import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { LoanRequest } from 'src/app/request/loan-request';
import { InvestmentRequest } from 'src/app/request/investment-request';
import { Account } from 'src/app/models/accounts/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  account: Account;
  private baseUrl: string = 'http://localhost:8080/rbr/account';
  private parans: HttpParams;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  doLoan(loanRequest: LoanRequest) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + '/loan', JSON.stringify(loanRequest), {headers: this.headers});
  }

  setterAccount(account: Account) {
    this.account = account;
  }

  getterAccount() {
    return this.account;
  }
}
