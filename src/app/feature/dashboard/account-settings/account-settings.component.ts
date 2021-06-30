import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Hotel } from "../../../shared/services/hotels/hotel.interface";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordAgain: new FormControl(),

    address:  new FormGroup({
      country: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      streetName: new FormControl('', Validators.required),
      streetNumber: new FormControl('', Validators.required)
    }),
    classification: new FormControl('', Validators.required)
  });

  hotel: Hotel = {
    name: this.form.get('name')?.value,
    username: this.form.get('username')?.value,
    email: this.form.get('email')?.value,
    phone: this.form.get('phone')?.value,
    password: this.form.get('password')?.value,
    address: {
      country: this.form.get('country')?.value,
      postalCode: this.form.get('postalCode')?.value,
      city: this.form.get('city')?.value,
      streetName: this.form.get('streetName')?.value,
      streetNumber: this.form.get('streetNumber')?.value,
    },
    classification: this.form.get('classification')?.value,
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}
