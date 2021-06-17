import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStatsRoutingModule } from "./dashboard-stats-routing.module";
import { DashboardStatsContainerComponent } from "./dashboard-stats-container/dashboard-stats-container.component";

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
