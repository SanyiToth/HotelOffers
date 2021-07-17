import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Offer} from "../../../../../shared/services/offers/offer.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard-edit-offer-general',
  templateUrl: './dashboard-edit-offer-general.component.html',
  styleUrls: ['./dashboard-edit-offer-general.component.css']
})
export class DashboardEditOfferGeneralComponent implements OnInit {

  offer: Offer = this.route.snapshot.data.offer;
  readonly DETAILS_MAX_LENGTH = 300;
  status = ['Active', 'Inactive', 'Ended', 'Deleted', 'Draft'];
  @Output() generalFormDataToParent = new EventEmitter<any>()

  generalFormGroup: FormGroup = this.fb.group({
    status: [null, Validators.required],
    heading: [null, Validators.required],
    details: [null, [Validators.required, Validators.maxLength(this.DETAILS_MAX_LENGTH)]],
    startDate: [null, Validators.required],
    endDate: [null, Validators.required],
    availableOffers: [{value: null, disabled: false}, Validators.required],
    price: [null, Validators.required]
  });


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.generalFormGroup.setValue({
      status: this.offer.status,
      heading: this.offer.heading,
      details: this.offer.details,
      startDate: this.offer.dateInterval.startDate,
      endDate: this.offer.dateInterval.endDate,
      availableOffers: this.offer.availableOffers,
      price: this.offer.price
    });

    this.generalFormGroup.valueChanges
      .subscribe(() => {
        if (this.generalFormGroup.valid) {
          this.generalFormDataToParent.emit(this.generalFormGroup.value)
        }
      })
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
