import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NotSameErrorStateMatcher } from './not-same-error-state-matcher';
import { HotelsService } from '../services/hotels/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  matcher = new NotSameErrorStateMatcher();
  
  form = new FormGroup({
    companyName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordAgain: new FormControl()
  }, this.checkPasswords)

  constructor(private myService: HotelsService, private route: Router) {}

  ngOnInit(): void {
  }

  onSubmit() {
    
    if (this.form.valid) {

      const companyData = {
        companyName: this.form.get('companyName')?.value,
        email: this.form.get('email')?.value,
        phoneNumber: this.form.get('phoneNumber')?.value,
        password: this.form.get('password')?.value
      }      
      this.myService.createHotel(companyData).subscribe(res => {        
        //this.route.navigate(['/dashboard']);
      })      
    }

  }

  checkPasswords(group: AbstractControl): null | ValidationErrors {
    const password = group.get('password')?.value;
    const passwordAgain = group.get('passwordAgain')?.value;
  
    return password === passwordAgain ? null : { notSame: true }     
  }
}
