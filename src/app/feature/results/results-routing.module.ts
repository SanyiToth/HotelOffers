import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsContainerComponent} from './results-container/results-container.component';
import {RouterModule, Routes} from "@angular/router";
import { ResultItemComponent } from './result-item/result-item.component';

const routes: Routes = [
  {path: '', component: ResultsContainerComponent},
  {path: 'detailed/:resultId', component: ResultItemComponent}
]

@NgModule({
  declarations: [
    ResultsContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ResultsRoutingModule {
}
