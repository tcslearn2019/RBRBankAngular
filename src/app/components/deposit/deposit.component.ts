import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/accounts/account.service';
import { User } from '../../models/users/user';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  user: User;
  value = new FormControl();
  constructor(private router: Router, private userservice: UserService, private accountService: AccountService) { }

  ngOnInit() {
    this.user = this.userservice.getterUser();
  }

  doDeposit() {
  }

}
