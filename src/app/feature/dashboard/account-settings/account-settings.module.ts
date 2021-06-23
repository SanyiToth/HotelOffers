import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from "./account-settings.component";
import { AccountSettingsRoutingModule } from "./account-settings-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from "@angular/material/list";
import {MatDivider, MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    AccountSettingsComponent
  ],
  exports: [
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    AccountSettingsRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ]
})
export class AccountSettingsModule { }
