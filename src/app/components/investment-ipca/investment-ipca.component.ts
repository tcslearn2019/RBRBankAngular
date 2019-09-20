import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users/user';
import { Router} from '@angular/router'

@Component({
  selector: 'app-investment-ipca',
  templateUrl: './investment-ipca.component.html',
  styleUrls: ['./investment-ipca.component.css']
})
export class InvestmentIpcaComponent implements OnInit {
  user:User;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  voltarInvestimento(){
    console.log('clique');
    this.router.navigate(['investment']);
  }
}
