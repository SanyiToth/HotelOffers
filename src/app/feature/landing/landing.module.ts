import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurNumbersComponent } from './our-numbers/our-numbers.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
    declarations: [
        OurNumbersComponent
    ],
    exports: [
        OurNumbersComponent
    ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class LandingModule { }
