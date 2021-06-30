import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl,} from '@angular/forms';
import { StatusRequest } from "../../../../shared/services/offers/status-request.interface";
import {Status} from "../../../../shared/services/offers/offer-status";


@Component({
  selector: 'app-dashboard-offers-header',
  templateUrl: './dashboard-offers-header.component.html',
  styleUrls: ['./dashboard-offers-header.component.scss']
})
export class DashboardOffersHeaderComponent {


  @Input( )statusList!: Status[];

 @Output() sendStatus: EventEmitter<StatusRequest> = new EventEmitter<StatusRequest>();

  selectStatusForm: FormGroup = this.fb.group({
    status:[''],
  })

  constructor(public fb: FormBuilder) {

  }

  get status(): AbstractControl | null {
    return this.selectStatusForm.get('status')
  }
  onSelectionChange(){
   this.sendStatus.emit(this.selectStatusForm.value);
    console.log(this.selectStatusForm.value)
  }
}
