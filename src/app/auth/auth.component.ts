import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../core";

import { first } from "rxjs/operators";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private authForm: FormGroup;
  private user: any;
  private returnUrl: string;
  private error: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      // login: ["", Validators.required],
      // password: ["", Validators.required]
      login: ["youremail@gmail.com", [Validators.required, Validators.email]],
      password: ["password", [Validators.required,Validators.minLength(6)]]
    });

    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";

  }
  onSubmit() {

    // if (this.authForm.invalid) {
    //   return;
    // }
    console.log(this.authForm.controls.login.value),
    console.log(this.authForm.controls.password.value),
    

    this.authService
      .login(
        this.authForm.controls.login.value,
        this.authForm.controls.password.value,
      )
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          alert("Некорректный логин или пароль!")
        }
      );
  }

}
