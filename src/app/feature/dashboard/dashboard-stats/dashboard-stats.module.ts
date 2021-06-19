import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStatsContainerComponent } from "./dashboard-stats-container/dashboard-stats-container.component";
import { DashboardStatsRoutingModule } from "./dashboard-stats-routing.module";

@NgModule({
  declarations: [
    DashboardStatsContainerComponent
  ],
  imports: [
    CommonModule,
    DashboardStatsRoutingModule


  ]
})
export class DashboardStatsModule { }

