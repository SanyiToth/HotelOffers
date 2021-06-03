import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopOffersComponent} from './top-offers/top-offers.component';
import {CarouselModule} from "primeng/carousel";
import {LandingContainerComponent} from "./landing-container/landing-container.component";


@NgModule({
  declarations: [
    LandingContainerComponent,
    TopOffersComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    TopOffersComponent
  ]
})
export class LandingModule {
}
