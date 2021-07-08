import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
    payment: new FormControl('', [])
  })

  payments: Payment[] = [
    {value: 'cash', viewValue: 'Cash'},
    {value: 'card', viewValue: 'Card'},
    {value: 'szép card', viewValue: 'Szép Card'}
  ];

  constructor( private dialogRef: MatDialogRef<OrderComponent> ) { }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    // API HTTP post request to book hotel room
    console.log(this.form);
  }
}
