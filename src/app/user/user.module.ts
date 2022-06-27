import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
// import { SidenavComponent } from '../company/sidenav/sidenav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { OrdersComponent } from './orders/orders.component';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { AddressComponent } from './address/address.component';
import { FAQsComponent } from './faqs/faqs.component';
import { EditComponent } from './edit/edit.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    WalletComponent,
    HomeComponent,
    OrdersComponent,
    BottomNavComponent,
    AddressComponent,
    FAQsComponent,
    EditComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    UserRoutingModule
  ]
})
export class UserModule { }
