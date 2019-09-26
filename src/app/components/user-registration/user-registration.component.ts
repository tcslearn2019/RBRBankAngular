import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Validators, FormControl, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '../../services/users/user.service';
import { User } from 'src/app/models/users/user';
import { Account } from 'src/app/models/accounts/account';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {  
  user = new FormGroup({
    cpf: new FormControl('',[
      Validators.required,
      Validators.maxLength(11),
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ])
  });

  userRegistration = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(55),
      Validators.pattern(/[a-zA-Z\s]/)
    ]),
    cpf: new FormControl('',[
      Validators.required
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ]),
    birthDate: new FormControl(),
    accountType: new FormControl()
  });

  matcher = new MyErrorStateMatcher();
  constructor(private location: Location, private userservice: UserService, private router: Router) { }

  ngOnInit() {
  }

  verificaErro(erro) {
    if (/^([0-9]|\-|\+|\*|\/|\=|\[|\]|\?|\$|\"|\,|\.|\<|\>|\%|\#|\;|\@|\&|\¬|\¨|\!|\(|\)|\_|\:|\{|\}|\`|\´|\^|\~|)/.test(erro.key)) {
      erro.preventDefault();
    }
  }

  getLogin(user) {
    this.userservice.getLogin(user.value).subscribe(r => {
      //console.log('r: ' + r);
      if (r == null) {
        alert('Dados inválidos.');
      } else {
        this.userservice.setterUser(r.user);
        const userSession = this.userservice.userSession(r.user);
        localStorage.setItem('user', JSON.stringify(userSession));
        localStorage.setItem('access_token', r.token);
        this.router.navigate(['index']);
      }
    },
      err => {
        console.log('Error: ' + err);
      });
  }

  getRegistration(userRegistration){
    const userFormatado = this.formatUser(userRegistration.value);
    this.userservice.getRegistration(userFormatado).subscribe(r => {
      console.log(r);
      if (r == null) {
        alert('Usuario invalido');
      } else {
        alert('Usuario cadastrado com Sucesso');
        location.reload();
      }
    },
      err => {
        console.log('Error: ' + err);
      });
  }

  formatUser(userRegistration): User {
    const user = new User();
    user.account = new Account();

    user.name = userRegistration.name;
    user.cpf = userRegistration.cpf;
    user.birthDate = userRegistration.birthDate;
    user.password = userRegistration.password;
    user.account.accountType = userRegistration.accountType;
    user.account.balance = 1000;
    return user;
  }

}
