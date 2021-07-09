import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HeadingFormComponent} from './heading-form/heading-form.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {OurNumbersComponent} from './our-numbers/our-numbers.component';
import {MatCardModule} from "@angular/material/card";
import {TopOffersComponent} from './top-offers/top-offers.component';
import {CarouselModule} from "primeng/carousel";
import {LandingContainerComponent} from "./landing-container/landing-container.component";
import {MatIconModule} from "@angular/material/icon";
import {RatingModule} from "../../shared/rating/rating.module";
import {HeaderModule} from "../../shared/header/header.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HeadingFormComponent,
    LandingContainerComponent,
    TopOffersComponent,
    OurNumbersComponent
  ],
    imports: [
        CommonModule,
        HeaderModule,
        RatingModule,
        HttpClientModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        CarouselModule,
        MatCardModule,
        MatIconModule,
        RouterModule,
        FormsModule,
    ],

  exports: [
    HeadingFormComponent,
    TopOffersComponent
  ],
  providers: [
    MatSelectModule,
    MatInputModule
  ]
})
export class LandingModule {
}
