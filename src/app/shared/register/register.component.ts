import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {NotSameErrorStateMatcher} from './not-same-error-state-matcher';
import {HotelsService} from '../services/hotels/hotels.service';
import {Hotel, NewHotel} from '../services/hotels/hotel.interface';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service'
import {LoginCredential} from "../auth/auth.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  matcher = new NotSameErrorStateMatcher();

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordAgain: new FormControl(),
    address: new FormGroup({
      country: new FormControl(''),
      postalCode: new FormControl(''),
      city: new FormControl(''),
      streetName: new FormControl(''),
      streetNumber: new FormControl('')
    }),
    classification: new FormControl('')
  }, this.checkPasswords)

  constructor(private hotelService: HotelsService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.form.get('username')?.setValue(this.getUserName(this.form.get('email')?.value))
    const hotel: NewHotel = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value,
      password: this.form.get('password')?.value,
      address: this.form.get('address')?.value,
      classification: this.form.get('classification')?.value,
      username: this.form.get('username')?.value,
    }
    if (this.form.valid) {
      this.hotelService.createHotel(hotel)
        .subscribe(newHotel => {
        const credentials: LoginCredential = {
          username: newHotel.username,
          password: newHotel.password
        }
        this.authService.login(credentials)
          .subscribe(response => {
              console.log('response loginService', response)
              this.router.navigate(['/dashboard'])
            },
            error => {
              console.log(error)
            });

      })
    }

  }

  getUserName(email: string): string {
    return email.split('@')[0];
  }

  checkPasswords(group: AbstractControl): null | ValidationErrors {
    const password = group.get('password')?.value;
    const passwordAgain = group.get('passwordAgain')?.value;
    return password === passwordAgain ? null : {notSame: true}
  }
}
