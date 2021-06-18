import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardOffersContainerComponent} from "./dashboard-offers-container/dashboard-offers-container.component";

const routes: Routes = [
  {path: '', component: DashboardOffersContainerComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardOffersRoutingModule { }

