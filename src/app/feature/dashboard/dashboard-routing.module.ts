import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard-container/dashboard.component";

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    { path: 'stats', loadChildren: () => import('./dashboard-stats/dashboard-stats.module').then(m => m.DashboardStatsModule )},
    { path: 'offers', loadChildren: () => import('./dashboard-offers/dashboard-offers.module').then(m => m.DashboardOffersModule) }
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
