import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NotSameErrorStateMatcher } from './not-same-error-state-matcher';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value)

    //form valid állapot vizsgálat
    //ha nem valid, akkor hibák jelzése
    //ha valid, akkor regisztráció api hívás, majd bejelentkezés és nav a kezdőoldalra

  }

  checkPasswords(group: AbstractControl): null | ValidationErrors {
    const password = group.get('password')?.value;
    const passwordAgain = group.get('passwordAgain')?.value;
  
    return password === passwordAgain ? null : { notSame: true }     
  }
}
