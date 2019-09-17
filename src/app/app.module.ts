import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserService } from './services/users/user.service';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { LoanComponent } from './components/loan/loan.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { IndexComponent } from './components/index/index.component';
import { FormsModule } from '@angular/forms';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule, MatProgressSpinnerModule, MatCardModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

const appRoutes: Routes = [
  { path: '', component: UserRegistrationComponent },
  { path: 'index', component: IndexComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'investment', component: InvestmentComponent },
  { path: 'transfer', component: TransferComponent}
];

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    InvestmentComponent,
    LoanComponent,
    TransferComponent,
    IndexComponent,
    UserdetailsComponent,
    ToolbarComponent,
    LoanComponent,   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    MatToolbarModule,
    MatButtonModule,
    NgxMaskModule.forRoot(options),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})

export class AppModule { }

