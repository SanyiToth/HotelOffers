import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Order} from '../order.interface';
import {OrdersService} from '../orders.service';
import {NotificationService} from "../../services/notification/notification.service";


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
    note: new FormControl('', []),
    payment: new FormControl('', [Validators.required])
  })

  payments: Payment[] = [
    {value: 'cash', viewValue: 'Cash'},
    {value: 'card', viewValue: 'Card'},
    {value: 'szép card', viewValue: 'Szép Card'}
  ];

  constructor(private dialogRef: MatDialogRef<OrderComponent>,
              private ordersService: OrdersService,
              private notificationService: NotificationService,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

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
        customer: {
          name: this.form.get('name')?.value,
          email: this.form.get('email')?.value,
          phone: this.form.get('phone')?.value,
        },
        payment: this.form.get('payment')?.value,
        note: this.form.get('note')?.value,
        provider: this.data.providerId,
        product: this.data.productId
      }
      this.ordersService.createOrder(order).subscribe(resp => {
        this.notificationService.open('Success! You have successfully ordered this offer!');
        this.close()
      }, error => {
        this.notificationService.open(error);
      })
    }
  }
}
