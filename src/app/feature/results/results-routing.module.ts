import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsContainerComponent} from './results-container/results-container.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: ResultsContainerComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule]
})
export class ResultsRoutingModule {
}
