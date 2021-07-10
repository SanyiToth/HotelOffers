import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LandingContainerComponent} from "../feature/landing/landing-container/landing-container.component";
import {TopOffersResolver} from "../shared/resolver/top-offers/top-offers.resolver";
import {AuthGuard} from "../shared/auth/auth.guard";
import {StatsResolver} from "../shared/resolver/stats/stats.resolver";

const routes: Routes = [
  {
    path: '', resolve: {
      stats: StatsResolver,
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
  { path: 't&c', loadChildren: () => import('../shared/pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)},
  { path: 'contact', loadChildren: () => import('../shared/pages/contact-us/contact-us.module').then(m => m.ContactUsModule)},
  { path: 'faq', loadChildren: () => import('../shared/pages/faq/faq.module').then(m => m.FaqModule)},
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
