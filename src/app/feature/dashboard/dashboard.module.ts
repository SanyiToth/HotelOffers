import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard-container/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSidenavComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
