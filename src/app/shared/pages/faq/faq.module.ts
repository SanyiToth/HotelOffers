import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { MatIconModule } from "@angular/material/icon";
import {FaqComponent} from "./faq.component";
import { HeaderModule } from "../../header/header.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    FaqComponent
    ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    MatIconModule,
    HeaderModule,
    MatCardModule
  ]
})
export class FaqModule { }
