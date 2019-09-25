import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { Session } from 'src/app/request/session/session';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: User;
  userSession: Session;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userservice.getterUser();
    this.userSession = JSON.parse(localStorage.getItem('user'));
    // console.log(this.userSession);
  }
  index() {
    this.router.navigate(['index']);
  }
  redirecionamento() {
    this.router.navigate(['index']);
  }
  sair() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
