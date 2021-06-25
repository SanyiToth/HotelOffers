import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NotSameErrorStateMatcher } from './not-same-error-state-matcher';
import { HotelsService } from '../services/hotels/hotels.service';
import { Hotel } from '../services/hotels/hotel.interface';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  matcher = new NotSameErrorStateMatcher();
  
  form = new FormGroup({
    name: new FormControl('', Validators.required),
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

  constructor(private hotelService: HotelsService, private route: Router, private authService: AuthService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    
    if (this.form.valid) {

      const hotel: Hotel = {
        name: this.form.get('name')?.value,
        email: this.form.get('email')?.value,
        phone: this.form.get('phone')?.value,
        password: this.form.get('password')?.value,
        address: {
          country: this.form.get('country')?.value,
          postalCode: this.form.get('postalCode')?.value,
          city: this.form.get('city')?.value,
          streetName: this.form.get('streetName')?.value,
          streetNumber: this.form.get('streetNumber')?.value
        },
        classification: this.form.get('classification')?.value
      }      
      this.hotelService.createHotel(hotel).subscribe(res => {  
        const credentials = {
          email: this.form.get('email')?.value,
          password: this.form.get('password')?.value
        }
        this.authService.login(credentials).subscribe(res => {
          this.route.navigate(['/dashboard']);
        },
        err => {
          this.route.navigate(['/login']);
        });
        
      })      
    }

  }

  checkPasswords(group: AbstractControl): null | ValidationErrors {
    const password = group.get('password')?.value;
    const passwordAgain = group.get('passwordAgain')?.value;
  
    return password === passwordAgain ? null : { notSame: true }     
  }
}
