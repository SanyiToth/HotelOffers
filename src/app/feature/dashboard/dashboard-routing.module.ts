import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard-container/dashboard.component";
import {AuthGuard} from "../../shared/auth/auth.guard";

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: DashboardComponent, children: [
      {
        path: 'stats',
        loadChildren: () => import('./dashboard-stats/dashboard-stats.module').then(m => m.DashboardStatsModule)
      },
      {
        path: 'offers',
        loadChildren: () => import('./dashboard-offers/dashboard-offers.module').then(m => m.DashboardOffersModule)
      },
/*      {
        path: 'new',
        loadChildren: () => import('./dashboard-new-offer/dashboard-new-offer.module').then(m => m.DashboardNewOfferModule)
      },*/
      {
        path: 'account-settings',
        loadChildren: () => import('./account-settings/account-settings.module').then(m => m.AccountSettingsModule)
      },
      {path: '', redirectTo: 'stats', pathMatch: 'full'},
      {path: '**', redirectTo: ''},
    ]
  }
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
