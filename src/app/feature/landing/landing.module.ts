import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingFormComponent } from './heading-form/heading-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'




@NgModule({
  declarations: [HeadingFormComponent],
  imports: [
    CommonModule,    
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],

  exports: [
    HeadingFormComponent,
  ],
  providers: [
    MatSelectModule,
    MatInputModule
  ]
})
export class LandingModule { }
