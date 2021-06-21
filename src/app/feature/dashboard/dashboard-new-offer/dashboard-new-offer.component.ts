import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-dashboard-new-offer',
  templateUrl: './dashboard-new-offer.component.html',
  styleUrls: ['./dashboard-new-offer.component.scss']
})
export class DashboardNewOfferComponent {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  ngOnInit() {

  }
}
