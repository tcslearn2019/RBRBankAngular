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


  constructor(private router: Router, private userservice: UserService, private accountService: AccountService) { }

  ngOnInit() {
    this.user = this.userservice.getterUser();
  }

  doLoan(value: number) {
    console.log(this.value);
    console.log(value);
    const loanRequest = this.formatLoan(value, this.user);
    this.accountService.doLoan(loanRequest).subscribe(r => {
      console.log(r);
      alert('emprestimo feito com sucesso!!!');
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