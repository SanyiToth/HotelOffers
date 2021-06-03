import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurNumbersComponent } from './our-numbers/our-numbers.component';
import {MatCardModule} from "@angular/material/card";
import {TopOffersComponent} from './top-offers/top-offers.component';
import {CarouselModule} from "primeng/carousel";
import {LandingContainerComponent} from "./landing-container/landing-container.component";


@NgModule({
  declarations: [
    LandingContainerComponent,
    TopOffersComponent,
    OurNumbersComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatCardModule
  ],
  exports: [
    TopOffersComponent
  ]
})
export class LandingModule { }
