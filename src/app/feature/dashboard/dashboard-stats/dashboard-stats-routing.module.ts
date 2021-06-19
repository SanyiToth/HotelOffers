import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardStatsContainerComponent} from "./dashboard-stats-container/dashboard-stats-container.component";

const routes: Routes = [
  {path: '', component: DashboardStatsContainerComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardStatsRoutingModule { }

