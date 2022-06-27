import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { OrdersComponent } from './orders/orders.component';
import { RiderComponent } from './rider.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', component: RiderComponent,
    children: [      
      { path: 'transactions', component: TransactionsComponent },
      { path: 'account', component: AccountsComponent },
      { path: 'order', component: OrdersComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiderRoutingModule { }
