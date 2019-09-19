import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanRequest } from 'src/app/request/loan-request';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
    cpf = new FormControl();


  constructor(private router: Router) { }

  ngOnInit() {
  }


  cancelar(loanRequest: LoanRequest) {
    this.router.navigate(['index']);
  }

}