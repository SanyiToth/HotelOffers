import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardOffersContainerComponent} from "./dashboard-offers-container/dashboard-offers-container.component";
import {DashboardOffersRoutingModule} from "./dashboard-offers-routing.module";
import {DashboardNewOfferContainerComponent} from "./dashboard-new-offer/dashboard-new offer-container/dashboard-new-offer-container.component";
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
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { DashboardOffersHeaderComponent } from './dashboard-offers-header/dashboard-offers-header.component';
import {MatSelectModule} from '@angular/material/select';
import {DashboardNewOfferFormComponent} from "./dashboard-new-offer/dashboard-new-offer-form/dashboard-new-offer-form.component";
import { DashboardEditOfferContainerComponent } from './dashboard-edit-offer/dashboard-edit-offer-container/dashboard-edit-offer-container.component';


@NgModule({
  declarations: [
    DashboardOffersContainerComponent,
    DashboardOfferListComponent,
    DashboardOfferItemComponent,
    DashboardOffersHeaderComponent,
    DashboardOfferListComponent,
    DashboardNewOfferContainerComponent,
    DashboardNewOfferFormComponent,
    DashboardEditOfferContainerComponent,
  ],
  imports: [
    CommonModule,
    ImgUploaderModule,
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
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    ImgUploaderModule,
    MatSnackBarModule
  ]
})
export class DashboardOffersModule {
}
