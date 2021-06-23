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
      availableOffers: [{value: '', disabled: false}],
      price: ['', Validators.required],
      limit: [false]
    });
  }

  ngOnInit() {
    console.log(this.limit?.value);
  }

  onSubmit() {
    console.log(this.firstFormGroup.value)
    console.log(this.limit?.value);
  }


  get availableOffers(): AbstractControl | null {
    return this.firstFormGroup.get('availableOffers');
  }

  get limit(): AbstractControl | null {
    return this.firstFormGroup.get('limit');
  }

  onChange() {
    if (this.availableOffers?.disabled) {
      this.availableOffers.enable()
    } else {
      this.availableOffers?.reset()
      this.availableOffers?.disable()
    }
  }
}
