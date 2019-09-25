import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  ativaPoupanca: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  investimento() {
    this.router.navigate(['index']);
  }
  poupanca() {
    this.router.navigate(['investment-savings']);
  }
  cdi() {
    this.router.navigate(['investment-cdi']);
  }
  ipca() {
    this.router.navigate(['investment-ipca']);
  }
}

