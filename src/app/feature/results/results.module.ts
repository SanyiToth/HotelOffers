import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { SidebarComponent } from './results-container/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class ResultsModule { }
