import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOffersContainerComponent } from "./dashboard-offers-container/dashboard-offers-container.component";
import { DashboardOffersRoutingModule  } from "./dashboard-offers-routing.module";
import { DashboardOfferItemComponent } from './dashboard-offer-item/dashboard-offer-item.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { DashboardOfferListComponent } from './dashboard-offer-list/dashboard-offer-list.component';

import { DashboardOffersHeaderComponent } from './dashboard-offers-header/dashboard-offers-header.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    DashboardOffersContainerComponent,
    DashboardOfferItemComponent,
    DashboardOffersHeaderComponent,
    DashboardOfferListComponent],
  imports: [
    CommonModule,
    DashboardOffersRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardOffersModule { }
