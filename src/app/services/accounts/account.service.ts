import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { LoanRequest } from 'src/app/request/loan-request';
import { InvestmentRequest } from 'src/app/request/investment-request';
import { Account } from 'src/app/models/accounts/account';
import { DepositRequest } from 'src/app/request/deposit-request';
import { TransferRequest } from 'src/app/request/transfer-request';

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
    const token = localStorage.getItem('access_token');
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8')
                               .set('Authorization', 'Bearer ' + token);
    return this.http.post(this.baseUrl + '/loan', JSON.stringify(loanRequest), {headers: this.headers});
  }

  doDeposit(depositRequest: DepositRequest) {
    this.headers = new HttpHeaders();
    const token = localStorage.getItem('access_token');
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8')
                               .set('Authorization', 'Bearer ' + token);
    return this.http.post(this.baseUrl + '/deposit', JSON.stringify(depositRequest), {headers: this.headers});
  }

  doTransfer(transfer: TransferRequest) {
    this.headers = new HttpHeaders();
    const token = localStorage.getItem('access_token');
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8')
                               .set('Authorization', 'Bearer ' + token);
    return this.http.post(this.baseUrl + '/transfer', JSON.stringify(transfer), {headers: this.headers});
  }

  setterAccount(account: Account) {
    this.account = account;
  }

  getterAccount() {
    return this.account;
  }
}
