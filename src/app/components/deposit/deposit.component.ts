import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/accounts/account.service';
import { User } from '../../models/users/user';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
import { DepositRequest } from 'src/app/request/deposit-request';
import { Session } from 'src/app/request/session/session';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  user: User;
  userSession: Session;
  value = new FormControl();
  password = new FormControl();

  constructor(private router: Router, private userservice: UserService, private accountService: AccountService) { }

  ngOnInit() {
    this.userSession = JSON.parse(localStorage.getItem('user'));
    this.userservice.getUser(this.userSession.numberAccount).subscribe(r => {
      if (r == null) {
        alert('Dados inválidos.');
      } else {
        //console.log(r.user);
        this.userservice.setterUser(r);
        this.user = r;
        const userSession = this.userservice.userSession(r);
        localStorage.setItem('user', JSON.stringify(userSession));
      }
    }, err => {
      console.log('Error: ' + err);
    });
  }

  voltaDetalhes() {
    this.router.navigate(['userdetails']);
  }

  doDeposit() {
    console.log(this.user);
    if (this.password.value === this.user.password) {
      const depositFormated = this.formatDeposit(this.value.value, this.user);
      this.accountService.doDeposit(depositFormated).subscribe(r => {
        this.userservice.getUser(this.user.account.numberAccount).subscribe( response => {
          if (response == null) {
            alert('error');
          } else {
            //console.log(response);
            this.userservice.setterUser(response);
            const userSession = this.userservice.userSession(response);
            localStorage.setItem('user', JSON.stringify(userSession));
            alert('Deposito feito com sucesso!!!');
            this.router.navigate(['index']);
          }
        });
      }, err => {
        console.log(err);
      });
    } else {
      alert('Senha Incorreta');
    }
  }

  formatDeposit(value: number, user: User): DepositRequest {
    const depositRequest = new DepositRequest();
    depositRequest.accountNumber = user.account.numberAccount;
    depositRequest.value = value;

    return depositRequest;
  }
}
