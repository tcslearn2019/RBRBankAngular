import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users/user';
import { UserService } from 'src/app/services/users/user.service';
import { InvestmentRequest } from 'src/app/request/investment-request';
import { FormControl } from '@angular/forms';
import { InvestmentService } from 'src/app/services/investments/investment.service';

@Component({
  selector: 'app-investment-savings',
  templateUrl: './investment-savings.component.html',
  styleUrls: ['./investment-savings.component.css']
})
export class InvestmentSavingsComponent implements OnInit {
  user: User;
  value = new FormControl();
  minimunValue: number = 0.05;
  investmentName: string = 'Poupanca';

  constructor(private userService: UserService, private investmentService: InvestmentService) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
  }

  createInvestmentSaving() {
    const savingFormated = this.formatInvestiment(this.value.value, this.user, this.investmentName, this.minimunValue);
    this.investmentService.createInvestment(savingFormated).subscribe(r => {
      console.log(r);
    }, err => {
      console.log(err);
    });
  }

  voltardetalhes() { }

  formatInvestiment(value: number, user: User, investmentName: string, minimunValue: number ): InvestmentRequest {
    const investmentRequest = new InvestmentRequest();
    investmentRequest.account = user.account;
    investmentRequest.investmentName = investmentName;
    investmentRequest.value = value;
    investmentRequest.minimumValue = minimunValue;

    return investmentRequest;
  }

}
