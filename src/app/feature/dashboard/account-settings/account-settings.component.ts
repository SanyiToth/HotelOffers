import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NewHotel} from "../../../shared/services/hotels/hotel.interface";
import {AccountSettingsService} from "./account-settings.service";
import {CurrentProviderService} from "../current-provider.service";
import {Router} from "@angular/router";
import { NotificationService } from "../../../shared/services/notification/notification.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordAgain: new FormControl(),

    address: new FormGroup({
      country: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      streetName: new FormControl('', Validators.required),
      streetNumber: new FormControl('', Validators.required)
    }),
    classification: new FormControl('', Validators.required)
  });

  hotel: NewHotel = {
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

  constructor(private accountService: AccountSettingsService,
              private currentProvider: CurrentProviderService,
              private router: Router,
              private notifications: NotificationService) {
  }

  public hotelId = this.currentProvider.getLoggedInProvider()._id;

  ngOnInit(): void {
    this.accountService.getProfile(this.hotelId).subscribe(resp => {
        console.log(resp);
      })
  }

  onSubmit(): void {
    this.accountService.patchProfile(this.hotelId, this.hotel).subscribe(
      (newhotel) => {
        setTimeout(() => {
          this.notifications.open("Success! Your account has been edited!");
          this.router.navigate(["/dashboard/stats"]);
        },1000);
        },
        error => {
          this.notifications.open(error);
      });
  }
}

