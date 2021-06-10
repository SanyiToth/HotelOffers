import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from "./core-routing.module";
import {CoreComponent} from './core/core.component';
import {LandingModule} from "../feature/landing/landing.module";
import {HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "../shared/header/header.module";
import {FooterModule} from "../shared/footer/footer.module";


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    CoreRoutingModule,
    LandingModule,
    HttpClientModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule {
}
