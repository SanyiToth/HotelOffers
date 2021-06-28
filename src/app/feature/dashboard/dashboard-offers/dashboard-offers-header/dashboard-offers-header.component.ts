import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl,} from '@angular/forms';
import { Offer } from "../../../../shared/services/offers/offer.interface";
import { StatusRequest } from "../../../../shared/services/offers/status-request.interface";
import {SearchRequest} from "../../../../shared/services/result/search-request";


@Component({
  selector: 'app-dashboard-offers-header',
  templateUrl: './dashboard-offers-header.component.html',
  styleUrls: ['./dashboard-offers-header.component.scss']
})
export class DashboardOffersHeaderComponent {

  @Input() offerStatus!: Offer[]

  @Output() sendStatus: EventEmitter<StatusRequest> = new EventEmitter<StatusRequest>();

  submitted = false;

  selectStatusForm: FormGroup = this.fb.group({
    status:[''],
  })

  statusList =  ['Active', 'Deactivated', 'Ended', 'Deleted', 'Draft']

  constructor(public fb: FormBuilder) { }


  selectStatus(event: any) {
    this.status!.setValue(event.target.value, {
      onlySelf: true
    })
  }
  get status(): AbstractControl | null {
    return this.selectStatusForm.get('status')
  }
  onSubmit(){
    this.submitted = true;
    this.sendStatus.emit(this.selectStatusForm.value as StatusRequest);
    console.log(this.selectStatusForm.value)

  }


}
