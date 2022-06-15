import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { CompanyComponent } from './company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RidersComponent } from './riders/riders.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { StaffComponent } from './staff/staff.component';
import { CompanyRoutingModule } from './company-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { OrdersComponent } from './orders/orders.component';
import { BranchComponent } from './branch/branch.component';



@NgModule({
  declarations: [
    CompanyComponent,
    WalletComponent,
    DashboardComponent,
    RidersComponent,
    StaffComponent,
    SettingsComponent,
    OrdersComponent,
    BranchComponent
  ],
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
