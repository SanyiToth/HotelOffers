import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard-container/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatIconModule} from "@angular/material/icon";
import {HeaderModule} from "../../shared/header/header.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    DashboardRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
