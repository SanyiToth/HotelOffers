import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsRoutingModule} from './results-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from "@angular/material/button";
import {ResultsSidebarComponent} from "./results-sidebar/results-sidebar.component";
import {ResultsContainerComponent} from "./results-container/results-container.component";
import {ResultItemComponent} from './result-item/result-item.component';
import {MatCardModule} from '@angular/material/card';
import {HeaderModule} from "../../shared/header/header.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ResultsSidebarComponent,
    ResultsContainerComponent,
    ResultItemComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ResultsRoutingModule,
    ResultsRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ResultsModule {
}
