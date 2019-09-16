import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '../../services/users/user.service';




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
    CPF: new FormControl(),
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
    Validators.pattern(/^[a-zA-Z\s]*$/)
  ]),
  CPF: new FormControl(),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(16)
  ])
});

  matcher = new MyErrorStateMatcher();
  constructor(private userservice: UserService) { }


  ngOnInit() {
  }

  getLogin(user) {
    console.log(user.value);
    this.userservice.getLogin(user.value).subscribe(r => {
      console.log(r);
    },
    err => {
      console.log(err);
    });
  }

  getRegistration(userRegistration) {
    console.log(userRegistration.value);
    this.userservice.getRegistration(userRegistration.value).subscribe(r => {
      console.log(r);
    },
    err => {
      console.log(err);
    });
  }

}
