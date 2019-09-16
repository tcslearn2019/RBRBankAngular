import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


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
  nomeFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(55),
    Validators.pattern(/^[a-zA-Z\s]*$/)
  ]);

  senhaFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(16)
  ]);

  confSenhaFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(16)
  ]);

  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit() {
  }


}
