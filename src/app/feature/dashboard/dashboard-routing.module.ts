import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardStatsContainerComponent} from "./dashboard-stats/dashboard-stats-container/dashboard-stats-container.component";
import { DashboardOffersRoutingModule } from "./dashboard-offers/dashboard-offers-routing.module";
import { DashboardStatsRoutingModule } from "./dashboard-stats/dashboard-stats-routing.module";

const routes: Routes = [

  {path: '', component: DashboardStatsContainerComponent},
  {path: 'stats', loadChildren: () => import('./dashboard-stats/dashboard-stats.module').then(m => m.DashboardStatsModule )},
  {path: 'offers', loadChildren: () => import('./dashboard-offers/dashboard-offers.module').then(m => m.DashboardOffersModule)},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardOffersRoutingModule,
    DashboardStatsRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
