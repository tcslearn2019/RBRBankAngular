import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { UserService } from './services/users/user.service';
=======

>>>>>>> 52e74dd70414213071fbf33ef1ecdb1516c9e1b1

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { LoanComponent } from './components/loan/loan.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { IndexComponent } from './components/index/index.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule,MatProgressSpinnerModule,MatCardModule, MatIconModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

import { HttpClient, HttpClientModule } from '@angular/common/http';



const appRoutes: Routes = [
  { path: '', component: UserRegistrationComponent},
  { path: 'index', component: IndexComponent}
];
<<<<<<< HEAD
=======
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
>>>>>>> 52e74dd70414213071fbf33ef1ecdb1516c9e1b1

import { FormsModule } from '@angular/forms';
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
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    FormsModule,    
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
<<<<<<< HEAD
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
=======
    MatToolbarModule,
    MatButtonModule,
    NgxMaskModule.forRoot(options),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
>>>>>>> 52e74dd70414213071fbf33ef1ecdb1516c9e1b1
})
export class AppModule { }

