import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TermsAndConditionsComponent } from './shared/pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './shared/pages/contact-us/contact-us.component';
import { FaqComponent } from './shared/pages/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    FaqComponent,    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
