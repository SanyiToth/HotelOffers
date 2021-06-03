import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from "./core-routing.module";
import { CoreComponent } from './core/core.component';
import {LandingModule} from "../feature/landing/landing.module";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    LandingModule,
    HttpClientModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule {
}
