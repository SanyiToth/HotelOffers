import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultItemComponent } from './result-item/result-item.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ResultItemComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    MatCardModule
  ]
})
export class ResultsModule { }
