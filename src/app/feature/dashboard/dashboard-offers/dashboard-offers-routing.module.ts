import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardOffersContainerComponent} from "./dashboard-offers-container/dashboard-offers-container.component";
import {DashboardNewOfferContainerComponent} from "./dashboard-new-offer/dashboard-new offer-container/dashboard-new-offer-container.component";


const routes: Routes = [
  {path: '', component: DashboardOffersContainerComponent},
  {
    path: '', children: [
      {path: 'new', component: DashboardNewOfferContainerComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardOffersRoutingModule {
}

