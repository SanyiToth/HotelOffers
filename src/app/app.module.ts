import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LandingModule } from './feature/landing/landing.module';
import { ImgUploaderComponent } from './shared/img-uploader/img-uploader.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgUploaderComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    LandingModule,
  ],
  providers: [LandingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
