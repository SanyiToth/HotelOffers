import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {HeaderModule} from "../../shared/header/header.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { DashboardMyBadgeMenuComponent } from './dashboard-my-badge-menu/dashboard-my-badge-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard-container/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { DashboardResultContainerComponent } from "./dashboard-result-container/dashboard-result-container.component";

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMyBadgeMenuComponent,
    DashboardSidenavComponent,
    DashboardResultContainerComponent
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
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule {
}
