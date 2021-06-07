import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
