import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TransferRequest } from 'src/app/request/transfer-request';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/accounts/account.service';
import { Session } from 'src/app/request/session/session';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  user: User;
  userSession:Session;

  transf = new FormGroup({
    accountReciever: new FormControl(),
    value: new FormControl(),
    password: new FormControl()
 });

  constructor(private userservice: UserService, private accountService: AccountService, private router: Router) { }

  ngOnInit() {
<<<<<<< HEAD
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
           }
    }, err => {
      console.log('erro');
      console.log(err);
    });
=======
    this.user = this.userservice.getterUser();
    //console.log(localStorage.getItem('user'));
>>>>>>> JWT
  }
doTransfer(transf) {

  if (transf.value.password === this.user.password) {
    const transfFormatado = this.formatTransfer(transf.value);
    this.accountService.doTransfer(transfFormatado).subscribe(r => {
      this.userservice.getUser(this.user.account.numberAccount).subscribe( response => {
        if (response == null) {
          alert('error');
        } else {
          //console.log(response);
          this.userservice.setterUser(response);
          const userSession = this.userservice.userSession(response.user);
          localStorage.setItem('user', JSON.stringify(userSession));
          alert('Transferencia feito com sucesso!!!');
          this.router.navigate(['index']);
        }
      });
    },
    err => {      
      console.log('Error: ' + err);
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
