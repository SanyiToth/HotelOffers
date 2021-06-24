import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOffersContainerComponent } from "./dashboard-offers-container/dashboard-offers-container.component";
import { DashboardOffersRoutingModule  } from "./dashboard-offers-routing.module";
import { DashboardOfferItemComponent } from './dashboard-offer-item/dashboard-offer-item.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { DashboardOfferListComponent } from './dashboard-offer-list/dashboard-offer-list.component';


@NgModule({
  declarations: [
    DashboardOffersContainerComponent,
    DashboardOfferItemComponent,
    DashboardOfferListComponent],
  imports: [
    CommonModule,
    DashboardOffersRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class DashboardOffersModule { }
