import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardOffersContainerComponent} from "./dashboard-offers-container/dashboard-offers-container.component";
import {DashboardNewOfferContainerComponent} from "./dashboard-new-offer/dashboard-new offer-container/dashboard-new-offer-container.component";
import {DashboardEditOfferContainerComponent} from "./dashboard-edit-offer/dashboard-edit-offer-container/dashboard-edit-offer-container.component";
import {OfferByIdResolver} from "../../../shared/resolver/offerById/offer-by-id.resolver";


const routes: Routes = [
  {path: '', component: DashboardOffersContainerComponent},
  {
    path: '', children: [
      {path: 'new', component: DashboardNewOfferContainerComponent},
      {path: 'edit/:id', resolve:{offer: OfferByIdResolver}, component: DashboardEditOfferContainerComponent}
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

