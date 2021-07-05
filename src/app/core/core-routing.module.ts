import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LandingContainerComponent} from "../feature/landing/landing-container/landing-container.component";
import {OffersResolver} from "../shared/resolver/offers/offers.resolver";
import {HotelsResolver} from "../shared/resolver/hotels/hotels.resolver";
import {OrdersResolver} from "../shared/resolver/orders/orders.resolver";
import {TopOffersResolver} from "../shared/resolver/top-offers/top-offers.resolver";
import {AuthGuard} from "../shared/auth/auth.guard";

const routes: Routes = [
  {
    path: '', resolve: {
      offers: OffersResolver,
      hotels: HotelsResolver,
      orders: OrdersResolver,
      topOffers: TopOffersResolver,
    }, component: LandingContainerComponent
  },
  {path: 'results', loadChildren: () => import('../feature/results/results.module').then(m => m.ResultsModule)},
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: () => import('../feature/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path: 'register', loadChildren: () => import('../shared/register/register.module').then(m => m.RegisterModule)},
  {path: 'login', loadChildren: () => import('../shared/login/login.module').then(m => m.LoginModule)},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {
}
