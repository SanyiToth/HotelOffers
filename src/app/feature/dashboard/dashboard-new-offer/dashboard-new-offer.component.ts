import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-dashboard-new-offer',
  templateUrl: './dashboard-new-offer.component.html',
  styleUrls: ['./dashboard-new-offer.component.scss']
})
export class DashboardNewOfferComponent {

  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      heading: ['', Validators.required],
      details: ['', Validators.required, Validators.max(50)],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      availableOffers: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.firstFormGroup.value)
  }
}
