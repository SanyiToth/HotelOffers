import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardOffersContainerComponent} from "./dashboard-offers-container/dashboard-offers-container.component";
import {DashboardOffersRoutingModule} from "./dashboard-offers-routing.module";
import {DashboardNewOfferComponent} from "../dashboard-new-offer/dashboard-new-offer.component";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {DashboardOfferItemComponent} from './dashboard-offer-item/dashboard-offer-item.component';
import {ImgUploaderModule} from "../../../shared/img-uploader/img-uploader.module";
import {DashboardOfferListComponent} from "./dashboard-offer-list/dashboard-offer-list.component";




@NgModule({
  declarations: [
    DashboardOffersContainerComponent,
    DashboardOfferListComponent,
    DashboardOfferItemComponent,
    DashboardNewOfferComponent],
  imports: [
    CommonModule,
    DashboardOffersRoutingModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ImgUploaderModule
  ]
})
export class DashboardOffersModule {
}
