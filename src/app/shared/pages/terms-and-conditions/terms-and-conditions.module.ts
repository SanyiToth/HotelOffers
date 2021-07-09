import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { MatIconModule } from "@angular/material/icon";
import {TermsAndConditionsComponent} from "./terms-and-conditions.component";
import { HeaderModule } from "../../header/header.module";


@NgModule({
  declarations: [
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    TermsAndConditionsRoutingModule,
    MatIconModule,
    HeaderModule
  ]
})
export class TermsAndConditionsModule { }
