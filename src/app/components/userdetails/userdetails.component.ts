import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/users/user';
import { Session } from 'src/app/request/session/session';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user: User;
  userSession: Session;
  constructor(private userservice: UserService, private router: Router ) { }


  ngOnInit() {
    debugger
    this.userSession = JSON.parse(localStorage.getItem('user'));
    console.log('UserSession 2: ' + this.userSession.numberAccount);
    this.userservice.getUser(this.userSession.numberAccount).subscribe(r => {
      debugger
      console.log("retorno: " + r);
      if (r == null) {
        console.log('ta vazio');
        alert('Dados inválidos.');
      } else {
        console.log('ta certo a inicialização');
        this.userservice.setterUser(r);
        this.user = r;
        const userSession = this.userservice.userSession(r);
        localStorage.setItem('user', JSON.stringify(userSession));
      }
    }, err => {
      console.log('erro');
      console.log(err);
    });
  }


  voltardetalhes() {
    console.log('clique');
    this.router.navigate(['index']);
  }
  deposito() {
    console.log('clique');
    this.router.navigate(['deposit']);
  }
}
