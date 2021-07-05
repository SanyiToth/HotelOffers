import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from "./core-routing.module";
import {CoreComponent} from './core/core.component';
import {LandingModule} from "../feature/landing/landing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "../shared/header/header.module";
import {FooterModule} from "../shared/footer/footer.module";
import {HttpErrorInterceptor} from "./interceptors/http-error/http-error.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MatSnackBarModule,
    CoreRoutingModule,
    LandingModule,
    HttpClientModule,
    OrdersModule
  ],
  exports: [
    CoreComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
})
export class CoreModule {
}
