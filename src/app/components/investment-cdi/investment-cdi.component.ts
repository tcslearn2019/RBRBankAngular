import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { InvestmentRequest } from 'src/app/request/investment-request';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { InvestmentService } from 'src/app/services/investments/investment.service';
import { FormControl } from '@angular/forms';
=======
import { User } from 'src/app/models/users/user';
>>>>>>> 246276e2e17b4b64a0d63f17a23ffe257934497d

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


  constructor(private userService: UserService, private investmentService: InvestmentService) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
  }

  createInvestmentCDI() {
    const CDIFormated = this.formatInvestiment(this.value.value, this.user, this.investmentName, this.minimunValue);
    this.investmentService.createInvestment(CDIFormated).subscribe(r => {
      console.log(r);
    }, err => {
      console.log(err);
    });
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
