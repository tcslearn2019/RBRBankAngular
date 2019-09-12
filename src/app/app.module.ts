import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { LoanComponent } from './components/loan/loan.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    InvestmentComponent,
    LoanComponent,
    TransferComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
