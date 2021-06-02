import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "../../core/not-found/not-found.component";
import {LandingContainerComponent} from './landing-container/landing-container.component';

const routes: Routes = [
  {path: '', component: LandingContainerComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];


@NgModule({
  declarations: [
    LandingContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule {
}
