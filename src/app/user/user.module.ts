import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import {  MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
// import { MatSidenavModule } from "@angular/material/;

@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    WalletComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    UserRoutingModule
  ]
})
export class UserModule { }
