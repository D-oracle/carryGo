import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';



@NgModule({
  declarations: [
    ProfileComponent,
    WalletComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
