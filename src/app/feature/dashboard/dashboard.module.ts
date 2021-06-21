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
import { DashboardComponent } from './dashboard-container/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { DashboardNewOfferComponent } from './dashboard-new-offer/dashboard-new-offer.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMyBadgeMenuComponent,
    DashboardSidenavComponent,
    DashboardNewOfferComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    HeaderModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    DashboardRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DashboardModule {
}
