import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { WalletComponent } from './wallet/wallet.component';
import { AddressComponent } from './address/address.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditComponent } from './edit/edit.component';
import { FAQsComponent } from './faqs/faqs.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent  },
      { path: 'wallet', component: WalletComponent },
      { path: 'address', component: AddressComponent },
      { path: 'edit', component: EditComponent },
      { path: 'faqs', component: FAQsComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'contacts', component: ContactsComponent } 
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

