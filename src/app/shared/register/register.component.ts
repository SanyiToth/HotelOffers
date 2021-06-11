import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  form = new FormGroup({
    companyName: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    password: new FormControl(),
    passwordAgain: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
