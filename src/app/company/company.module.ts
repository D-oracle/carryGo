import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { CompanyComponent } from './company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RidersComponent } from './riders/riders.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    WalletComponent,
    CompanyComponent,
    DashboardComponent,
    RidersComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
  ]
})
export class CompanyModule { }
