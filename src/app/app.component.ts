import { Component } from '@angular/core';
import { User } from 'src/app/models/users/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  title = 'RBRBankAngular';

  constructor(private router:Router){}

  userIsNotLogged(): boolean{
    return this.router.url === '/' ||
    this.router.url === '/politics'||
    this.router.url === '/devs';
  }
}


