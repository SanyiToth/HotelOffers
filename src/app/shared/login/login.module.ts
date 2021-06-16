import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {LoginRoutingModule} from "./login-routing.module";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
  ]
})
export class LoginModule { }
