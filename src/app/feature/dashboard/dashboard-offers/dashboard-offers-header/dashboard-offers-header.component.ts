import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup,} from '@angular/forms';
import { Status } from "../../../../shared/services/offers/offer.interface";


@Component({
  selector: 'app-dashboard-offers-header',
  templateUrl: './dashboard-offers-header.component.html',
  styleUrls: ['./dashboard-offers-header.component.scss']
})

export class DashboardOffersHeaderComponent {

  @Output() sendStatus: EventEmitter<Status> = new EventEmitter<Status>();

  selectStatusForm: FormGroup = this.fb.group({
    status:[],
  })

  statusList: Status[]  = [Status.Active,Status.Deleted,Status.Draft,Status.Ended, Status.Inactive];

  constructor(public fb: FormBuilder) {}

  get status(): AbstractControl | null {
    return this.selectStatusForm.get('status')
  }
  onSelectionChange(){
   this.sendStatus.emit(this.selectStatusForm.value as Status);
  }
}
