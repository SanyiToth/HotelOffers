import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  errorMsg: string | undefined | null;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    this.auth
      .login(this.form.value)
      .subscribe(
        (user) => {
          console.log("user", user);
          console.log("isLoggedIn", this.auth.isLoggedIn());
          setTimeout(() => {
            this.router.navigate(["/dashboard"]); },2000);
        },
        (error: HttpErrorResponse) => {
          console.log("error", error);
          this.errorMsg = error.error;
        });

    this.form.reset();
  }
}
