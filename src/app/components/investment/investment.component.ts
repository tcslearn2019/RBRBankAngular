import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  ativaPoupanca: boolean = false;

  constructor(private router: Router){ }

  ngOnInit() {
  }

  investimento(){
    console.log('clique');
    this.router.navigate(['index']);
  }

}
