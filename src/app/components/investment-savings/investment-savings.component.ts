import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users/user';
import { Router} from '@angular/router';

@Component({
  selector: 'app-investment-savings',
  templateUrl: './investment-savings.component.html',
  styleUrls: ['./investment-savings.component.css']
})
export class InvestmentSavingsComponent implements OnInit {

  user: User;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  voltardetalhes() {
    console.log('clique');
    this.router.navigate(['investment'])
  }
}
