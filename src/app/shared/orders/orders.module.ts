import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    OrderComponent
  ],
  providers: [
    MatDialogModule
  ]
})
export class OrdersModule { }
