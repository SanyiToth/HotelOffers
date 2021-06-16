import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard-container/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatIconModule} from "@angular/material/icon";
import {HeaderModule} from "../../shared/header/header.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { DashboardMyBadgeMenuComponent } from './dashboard-my-badge-menu/dashboard-my-badge-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMyBadgeMenuComponent,
    DashboardSidenavComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    HeaderModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
