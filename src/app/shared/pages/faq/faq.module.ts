import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { MatIconModule } from "@angular/material/icon";
import {FaqComponent} from "./faq.component";
import { HeaderModule } from "../../header/header.module";

@NgModule({
  declarations: [
    FaqComponent
    ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    MatIconModule,
    HeaderModule
  ]
})
export class FaqModule { }
