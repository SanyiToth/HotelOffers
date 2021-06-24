import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl,} from '@angular/forms';
import { Offer } from "../../../../shared/services/offers/offer.interface";
import { StatusRequest } from "../../../../shared/services/offers/status-request.interface";
import {SearchRequest} from "../../../../shared/services/result/search-request";


@Component({
  selector: 'app-dashboard-offers-header',
  templateUrl: './dashboard-offers-header.component.html',
  styleUrls: ['./dashboard-offers-header.component.scss']
})
export class DashboardOffersHeaderComponent implements OnInit {

  @Input() offerStatus!: Offer[]
  @Output() sendStatus: EventEmitter<StatusRequest> = new EventEmitter<StatusRequest>();

  selectStatusForm: FormGroup = this.fb.group({
    status:[null],
  })
  isSubmitted = false;

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
    this.isSubmitted = true;
    this.sendStatus.emit(this.selectStatusForm.value as StatusRequest);
    console.log(this.selectStatusForm.value)
  }


  ngOnInit(): void {

  }

}
