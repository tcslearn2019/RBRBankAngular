import { Injectable } from '@angular/core';
import { InvestmentRequest } from 'src/app/request/investment-request';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Investment } from 'src/app/models/investments/investment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  investment: Investment;
  private baseUrl: string = 'http://localhost:8080/rbr/investment';
  private parans: HttpParams;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  createInvestment(investmentRequest: InvestmentRequest) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + '/create', JSON.stringify(investmentRequest), {headers: this.headers});
  }

  setterInvestment(investment: Investment) {
    this.investment = investment;
  }

  getterInvestment() {
    return this.investment;
  }
}
