import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { LoanComponent } from './components/loan/loan.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { IndexComponent } from './components/index/index.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: UserRegistrationComponent},
  { path: 'index', component: IndexComponent}
];

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
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
