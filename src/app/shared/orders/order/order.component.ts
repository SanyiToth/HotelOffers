import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Order } from '../order.interface';
import { OrdersService } from '../orders.service';

interface Payment {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    notes: new FormControl('', []),
    payment: new FormControl('', [Validators.required])
  })

  payments: Payment[] = [
    {value: 'cash', viewValue: 'Cash'},
    {value: 'card', viewValue: 'Card'},
    {value: 'szép card', viewValue: 'Szép Card'}
  ];

  constructor( private dialogRef: MatDialogRef<OrderComponent>, private ordersServise: OrdersService ) { }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.valid) {

      const order: Order = {
        name: this.form.get('name')?.value,
        email: this.form.get('email')?.value,
        phone: this.form.get('phone')?.value,
        payment: this.form.get('payment')?.value,
        notes: this.form.get('notes')?.value
      }

      this.ordersServise.createHotel(order).subscribe(res => {
        this.close()
      })
    }
  }
}
