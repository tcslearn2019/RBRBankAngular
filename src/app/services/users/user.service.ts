import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:8080/rbr/user';

  private parans: HttpParams;
  constructor(private httpCli: HttpClient) { }

  getUser(numberAccount: number) {
    this.parans = new HttpParams();
    this.parans = this.parans.set('numberAccount', numberAccount.toString());
    const param = {params: this.parans};
    return this.httpCli.get(this.baseUrl + '/cli', param);
  }

  getLogin(login: string, password: string) {
    const json = '{"login": ' + login + ',"password":' + 'password' + '}';
    console.log(json);
    return this.httpCli.post(this.baseUrl + '/login', JSON.parse(json));
  }

}
