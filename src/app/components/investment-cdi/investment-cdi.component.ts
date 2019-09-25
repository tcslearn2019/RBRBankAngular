import { Component, OnInit } from '@angular/core';
import { InvestmentRequest } from 'src/app/request/investment-request';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { InvestmentService } from 'src/app/services/investments/investment.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-investment-cdi',
  templateUrl: './investment-cdi.component.html',
  styleUrls: ['./investment-cdi.component.css']
})
export class InvestmentCdiComponent implements OnInit {
  user: User;
  value = new FormControl();
  minimunValue: number = 1000;
  investmentName: string = 'CDI';


  constructor(private router: Router , private userService: UserService, private investmentService: InvestmentService) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
  }

  createInvestmentCDI() {
    const CDIFormated = this.formatInvestiment(this.value.value, this.user, this.investmentName, this.minimunValue);
    this.investmentService.createInvestment(CDIFormated).subscribe(r => {
      this.userService.getUser(this.user.account.numberAccount).subscribe( response => {
        if (response == null) {
          alert('error');
        } else {
          console.log(response);
          this.userService.setterUser(response);
          const userSession = this.userService.userSession(response.user);
          localStorage.setItem('user', JSON.stringify(userSession));
          alert('Investimento feito com sucesso!!!');
          this.router.navigate(['index']);
        }
      });
      console.log(r);
    }, err => {
      console.log(err);
    });
  }

  voltarInvestimento(){
    console.log('clique');
    this.router.navigate(['investment'])
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
