import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOffersContainerComponent } from "./dashboard-offers-container/dashboard-offers-container.component";
import { DashboardOffersRoutingModule  } from "./dashboard-offers-routing.module";
import { DashboardOffersHeaderComponent } from './dashboard-offers-header/dashboard-offers-header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [DashboardOffersContainerComponent, DashboardOffersHeaderComponent],
  imports: [
    CommonModule,
    DashboardOffersRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardOffersModule { }
