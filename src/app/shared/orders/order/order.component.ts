import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  form?: FormGroup;


  constructor( private fb: FormBuilder, private dialogRef: MatDialogRef<OrderComponent> ) { }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close('hello');
  }

}
