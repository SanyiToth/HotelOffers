import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsRoutingModule} from './results-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from "@angular/material/button";
import {ResultsSidebarComponent} from "./results-container/results-sidebar/results-sidebar.component";
import {ResultsContainerComponent} from "./results-container/results-container.component";

@NgModule({
  declarations: [
    ResultsSidebarComponent,
    ResultsContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ResultsRoutingModule,
  ],
  exports: [
  ]
})
export class ResultsModule {
}
