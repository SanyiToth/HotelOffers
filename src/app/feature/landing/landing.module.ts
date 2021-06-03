import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { TopOffersComponent } from './landing-container/top-offers/top-offers.component';



@NgModule({
  declarations: [
    TopOffersComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
