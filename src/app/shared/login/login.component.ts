import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {NotificationService} from "../services/notification/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  errorMsg: string | undefined | null;


  constructor(private auth: AuthService, private router: Router, private notifications: NotificationService) { }

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
          this.notifications.open("Successful login!");
          setTimeout(() => {
            this.router.navigate(["/dashboard"]);
            },2000);
        },
        error => {
          this.notifications.open(error);
        });
    this.form.reset();
  }
}
