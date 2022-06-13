import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { CompanyComponent } from './company.component';



@NgModule({
  declarations: [
    WalletComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
