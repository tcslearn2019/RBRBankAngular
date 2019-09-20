import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanRequest } from 'src/app/request/loan-request';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { AccountService } from 'src/app/services/accounts/account.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
    user: User;
    value = new FormControl();
    valorEmprestado: number;

  constructor(private router: Router, private userservice: UserService, private accountService: AccountService) { }

  ngOnInit() {
    this.user = this.userservice.getterUser();
    this.valorEmprestado = (this.user.account.loanLimit - 5000);
  }

  doLoan(value: number) {
    const loanRequest = this.formatLoan(this.value.value, this.user);
    this.accountService.doLoan(loanRequest).subscribe(r => {
      this.userservice.getUser(this.user.account.numberAccount).subscribe( response => {
        if (response == null) {
          alert('error');
        } else {
          console.log(response);
          this.userservice.setterUser(response);
          alert('emprestimo feito com sucesso!!!');
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