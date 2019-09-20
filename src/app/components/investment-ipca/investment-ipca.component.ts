import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users/user';
import { InvestmentRequest } from 'src/app/request/investment-request';
import { UserService } from 'src/app/services/users/user.service';
import { InvestmentService } from 'src/app/services/investments/investment.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-ipca',
  templateUrl: './investment-ipca.component.html',
  styleUrls: ['./investment-ipca.component.css']
})
export class InvestmentIpcaComponent implements OnInit {
  user: User;
  value = new FormControl();
  minimunValue: number = 1000;
  investmentName: string = 'IPCA';


  constructor(private router: Router, private userService: UserService, private investmentService: InvestmentService) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
  }

  createInvestmentIPCA() {
    const IPCAFormated = this.formatInvestiment(this.value.value, this.user, this.investmentName, this.minimunValue);
    this.investmentService.createInvestment(IPCAFormated).subscribe(r => {
      this.userService.getUser(this.user.account.numberAccount).subscribe( response => {
        if (response == null) {
          alert('error');
        } else {
          console.log(response);
          this.userService.setterUser(response);
          alert('Investimento feito com sucesso!!!');
          this.router.navigate(['index']);
        }
      });
    }, err => {
      console.log(err);
    });
  }
  voltarInvestimento(){
    console.log('clique');
    this.router.navigate(['investment']);
  }
  formatInvestiment(value: number, user: User, investmentName: string, minimunValue: number ): InvestmentRequest {
    const investmentRequest = new InvestmentRequest();
    investmentRequest.account = user.account;
    investmentRequest.investmentName = investmentName;
    investmentRequest.value = value;
    investmentRequest.minimumValue = minimunValue;

    return investmentRequest;
  }
}
