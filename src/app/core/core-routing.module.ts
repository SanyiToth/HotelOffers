import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LandingContainerComponent} from "../feature/landing/landing-container/landing-container.component";
import {OffersResolver} from "../shared/services/offers/offers.resolver";

const routes: Routes = [
  {
    path: '', resolve: {
      offers: OffersResolver
    }, component: LandingContainerComponent
  },
  {path: 'results', loadChildren: () => import('../feature/results/results.module').then(m => m.ResultsModule)},
  {path: 'dashboard', loadChildren: () => import('../feature/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {
}
