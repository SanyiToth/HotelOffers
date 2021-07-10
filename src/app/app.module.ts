import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderModule } from "./shared/header/header.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        CoreModule,
        BrowserAnimationsModule,
        HeaderModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
