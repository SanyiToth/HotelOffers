import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";


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
      details: ['', [Validators.required, Validators.maxLength(50)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      availableOffers: [{value: '', disabled: false}, Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.firstFormGroup.value)
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
    return this.firstFormGroup.get('heading');
  }
  get details(): AbstractControl | null {
    return this.firstFormGroup.get('details');
  }
  get startDate(): AbstractControl | null {
    return this.firstFormGroup.get('startDate');
  }
  get endDate(): AbstractControl | null {
    return this.firstFormGroup.get('endDate');
  }
  get availableOffers(): AbstractControl | null {
    return this.firstFormGroup.get('availableOffers');
  }

  get price(): AbstractControl | null {
    return this.firstFormGroup.get('price');
  }
}
