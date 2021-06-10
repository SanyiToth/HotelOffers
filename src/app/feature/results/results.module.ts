import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultItemComponent } from './result-item/result-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ResultItemCardComponent } from './result-item-card/result-item-card.component';
import { ResultItemListComponent } from './result-item-list/result-item-list.component';
import {ResultsContainerComponent} from "./results-container/results-container.component";



@NgModule({
  declarations: [
    ResultItemComponent,
    ResultItemCardComponent,
    ResultItemListComponent,
    ResultsContainerComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ResultsModule { }
