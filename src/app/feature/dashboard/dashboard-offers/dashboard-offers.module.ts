import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOffersContainerComponent } from "./dashboard-offers-container/dashboard-offers-container.component";
import { DashboardOffersRoutingModule } from "./dashboard-offers-routing.module";

@NgModule({
  declarations: [DashboardOffersContainerComponent],
  imports: [
    CommonModule,
    DashboardOffersRoutingModule
  ]
})
export class DashboardOffersModule { }
