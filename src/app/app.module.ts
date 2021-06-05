import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {RouterModule} from "@angular/router";
import {LandingModule} from "./feature/landing/landing.module";
import {SharedModule} from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    LandingModule
  ],
  providers: [LandingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
