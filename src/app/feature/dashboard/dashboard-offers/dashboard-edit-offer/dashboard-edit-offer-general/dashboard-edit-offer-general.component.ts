import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Status} from "../../../../../shared/services/offers/offer.interface";

@Component({
  selector: 'app-dashboard-edit-offer-general',
  templateUrl: './dashboard-edit-offer-general.component.html',
  styleUrls: ['./dashboard-edit-offer-general.component.css']
})
export class DashboardEditOfferGeneralComponent implements OnInit {


  generalFormGroup: FormGroup = this.fb.group({
    heading: ['', Validators.required],
    details: ['', [Validators.required, Validators.maxLength(DashboardEditOfferGeneralComponent.DETAILS_MAX_LENGTH)]],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    availableOffers: [{value: '', disabled: false}, Validators.required],
    price: ['', Validators.required]
  });

  static readonly DETAILS_MAX_LENGTH = 300;
  status = ['Active', 'Inactive', 'Ended', 'Deleted', 'Draft']

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onChange() {
    if (this.availableOffers?.disabled) {
      this.availableOffers.enable();
      this.availableOffers?.reset();
    } else {
      this.availableOffers?.disable();
      this.availableOffers?.reset();
    }
  }

  get heading(): AbstractControl | null {
    return this.generalFormGroup.get('heading');
  }

  get details(): AbstractControl | null {
    return this.generalFormGroup.get('details');
  }

  get startDate(): AbstractControl | null {
    return this.generalFormGroup.get('startDate');
  }

  get endDate(): AbstractControl | null {
    return this.generalFormGroup.get('endDate');
  }

  get availableOffers(): AbstractControl | null {
    return this.generalFormGroup.get('availableOffers');
  }

  get price(): AbstractControl | null {
    return this.generalFormGroup.get('price');
  }

}
