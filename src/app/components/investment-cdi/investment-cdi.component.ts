import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users/user';

@Component({
  selector: 'app-investment-cdi',
  templateUrl: './investment-cdi.component.html',
  styleUrls: ['./investment-cdi.component.css']
})
export class InvestmentCdiComponent implements OnInit {
  user:User;
  constructor() { }

  ngOnInit() {
  }

}
