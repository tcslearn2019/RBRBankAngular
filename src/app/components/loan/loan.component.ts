import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanRequest } from 'src/app/request/loan-request';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { AccountService } from 'src/app/services/accounts/account.service';
import { Session } from 'src/app/request/session/session';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
    user: User;
    userSession: Session;
    value = new FormControl();
    valorEmprestado: number;

  constructor(private router: Router, private userservice: UserService, private accountService: AccountService) { }

  ngOnInit() {
    this.userSession = JSON.parse(localStorage.getItem('user'));
    this.userservice.getUser(this.userSession.numberAccount).subscribe(r => {
     // console.log("retorno: " + r);
      if (r == null) {
        console.log('ta vazio');
        alert('Dados inválidos.');
      } else {
        console.log('ta certo a inicialização');
        this.userservice.setterUser(r);
        this.user = r;
        const userSession = this.userservice.userSession(r);
        localStorage.setItem('user', JSON.stringify(userSession));
        this.valorEmprestado = (5000 - this.user.account.loanLimit);
      }
    }, err => {
      console.log('erro');
      console.log(err);
    });
  }

  doLoan(value: number) {
    const loanRequest = this.formatLoan(this.value.value, this.user);
    this.accountService.doLoan(loanRequest).subscribe(r => {
      this.userservice.getUser(this.userSession.numberAccount).subscribe( response => {
        if (response == null) {
          alert('error');
        } else {
          console.log(response);
          this.userservice.setterUser(response);
          const userSession = this.userservice.userSession(response);
          localStorage.setItem('user', JSON.stringify(userSession)); 
          alert('Emprestimo feito com sucesso!!!');
          this.router.navigate(['index']);
        }
      });
    }, err => {
      console.log('Error: ' + err);
    });
  }
  cancelar() {
    this.router.navigate(['index']);
  }

  formatLoan(value: number, user: User): LoanRequest {
    const loanRequest = new LoanRequest();
    loanRequest.value = value;
    loanRequest.accountNumber = user.account.numberAccount;

    return loanRequest;
  }
}