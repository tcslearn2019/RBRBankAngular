import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanRequest } from 'src/app/request/loan-request';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
    user: User;
    value = new FormControl();


  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.user = this.userservice.getterUser();
  }

  doLoan(value: number) {

  }
  cancelar() {
    this.router.navigate(['index']);
  }

 
}