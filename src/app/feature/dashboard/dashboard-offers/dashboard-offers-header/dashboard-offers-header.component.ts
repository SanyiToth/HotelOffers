import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl,} from '@angular/forms';
import { Offer } from "../../../../shared/services/offers/offer.interface";


@Component({
  selector: 'app-dashboard-offers-header',
  templateUrl: './dashboard-offers-header.component.html',
  styleUrls: ['./dashboard-offers-header.component.scss']
})
export class DashboardOffersHeaderComponent implements OnInit {

  @Input() offerStatus!: Offer

  selectStatusForm: FormGroup = this.fb.group({
    status:[],
  })

  constructor(public fb: FormBuilder) { }


  selectStatus(event: any) {
    this.status!.setValue(event.target.value, {
      onlySelf: true
    })
  }
  get status(): AbstractControl | null {
    return this.selectStatusForm.get('status')
  }

  ngOnInit(): void {
  }

}
