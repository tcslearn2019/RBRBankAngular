import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { TransferRequest } from 'src/app/request/transfer-request';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/accounts/account.service';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  user: User;

  transf = new FormGroup({
    accountReceiver: new FormControl('',[
      Validators.required,
      Validators.pattern(/^[0-9]*$/)
    ]),
    value: new FormControl('',[
      Validators.required,
      Validators.min(0.01)
    ]),
    password: new FormControl('',[
      Validators.required,
    ]),
  });

  matcher = new MyErrorStateMatcher();
  constructor(private userservice: UserService, private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.user = this.userservice.getterUser();
  }

  doTransfer(transf) {
    if (transf.value.password === this.user.password) {
      const transfFormatado = this.formatTransfer(transf.value);
      this.accountService.doTransfer(transfFormatado).subscribe(r => {
        this.userservice.getUser(this.user.account.numberAccount).subscribe(response => {
          if (response == null) {
            alert('error');
          } else {
            console.log(response);
            this.userservice.setterUser(response);
            alert('Transferencia feito com sucesso!!!');
            this.router.navigate(['index']);
          }
        });
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
    transfReq.receiverId = transf.accountReceiver;
    transfReq.senderId = this.user.account.numberAccount;
    transfReq.value = transf.value;

    return transfReq;
  }


}
