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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

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
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
