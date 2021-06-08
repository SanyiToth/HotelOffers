import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RatingComponent} from './rating/rating.component';
import {HttpClientModule} from "@angular/common/http";
import { ParenthesesPipe } from './pipes/parentheses/parentheses.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RatingComponent,
    ParenthesesPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    FooterComponent,
    HeaderComponent,
    RatingComponent
  ]
})
export class SharedModule {
}
