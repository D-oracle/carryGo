import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiderRoutingModule } from './rider-routing.module';
import { RiderComponent } from './rider.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountsComponent } from './accounts/accounts.component';
import { OrdersComponent } from './orders/orders.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    RiderComponent,
    TransactionsComponent,
    AccountsComponent,
    BottomNavComponent,
    OrdersComponent,
    DeliveredComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RiderRoutingModule
  ]
})
export class RiderModule { }
