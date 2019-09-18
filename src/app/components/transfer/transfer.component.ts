import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TransferRequest } from 'src/app/request/transfer-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  user: User;

  transf = new FormGroup({
    accountReciever: new FormControl(),
    value: new FormControl(),
    password: new FormControl()
 });

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userservice.getterUser();
  }

doTransfer(transf) {
  if (transf.value.password === this.user.password) {
    const transfFormatado = this.formatTransfer(transf.value);
    this.userservice.doTransfer(transfFormatado).subscribe(r => {
      console.log(r);
      this.router.navigate(['index']);
    },
    err => {
      console.log('errs');
      console.log(err);
    });
  }
}

cancelar() {
  this.router.navigate(['index']);
}

formatTransfer(transf): TransferRequest {
  const transfReq = new TransferRequest();
  transfReq.receiverId = transf.accountReciever;
  transfReq.senderId = this.user.account.numberAccount;
  transfReq.value = transf.value;

  return transfReq;
}


}
