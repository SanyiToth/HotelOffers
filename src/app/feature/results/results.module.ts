import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsRoutingModule} from './results-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {SidebarComponent} from "./results-container/sidebar/sidebar.component";
import {ResultsContainerComponent} from "./results-container/results-container.component";

@NgModule({
  declarations: [
    SidebarComponent,
    ResultsContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ResultsRoutingModule,
  ],
  exports: [
  ]
})
export class ResultsModule {
}
