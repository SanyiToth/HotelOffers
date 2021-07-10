import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { MatIconModule } from "@angular/material/icon";
import {ContactUsComponent} from "./contact-us.component";
import { HeaderModule } from "../../header/header.module";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    MatIconModule,
    HeaderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class ContactUsModule { }
