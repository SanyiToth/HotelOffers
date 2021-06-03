import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRoutingModule} from './landing-routing.module';
import {TopOffersComponent} from './top-offers/top-offers.component';
import {CarouselModule} from "primeng/carousel";


@NgModule({
  declarations: [
    TopOffersComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CarouselModule
  ],
  exports: [
    TopOffersComponent
  ]
})
export class LandingModule {
}
