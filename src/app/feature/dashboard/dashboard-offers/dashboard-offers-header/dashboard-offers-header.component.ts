import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl,} from '@angular/forms';

@Component({
  selector: 'app-dashboard-offers-header',
  templateUrl: './dashboard-offers-header.component.html',
  styleUrls: ['./dashboard-offers-header.component.scss']
})
export class DashboardOffersHeaderComponent implements OnInit {

  selectStatusForm: FormGroup = this.fb.group({
    status:[]
  })

  constructor(public fb: FormBuilder) { }


  get status(): AbstractControl | null {
    return this.selectStatusForm.get('status')
  }

  selectStatus(event: any) {
    this.status!.setValue(event.target.value, {
      onlySelf: true
    })
  }

  ngOnInit(): void {
  }

}
