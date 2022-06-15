import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent  },
      { path: 'wallet', component: WalletComponent },
      { path: 'order', component: OrdersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
