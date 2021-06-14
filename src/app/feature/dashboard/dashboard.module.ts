import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard-container/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatIconModule} from "@angular/material/icon";
import {HeaderModule} from "../../shared/header/header.module";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    DashboardRoutingModule,
    MatIconModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
