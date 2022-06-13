import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiderRoutingModule } from './rider-routing.module';
import { RiderComponent } from './rider.component';



@NgModule({
  declarations: [
    RiderComponent
  ],
  imports: [
    CommonModule,
    RiderRoutingModule
  ]
})
export class RiderModule { }
