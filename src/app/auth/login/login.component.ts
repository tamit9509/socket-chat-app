import { CONSTANTS } from './../../utils/constants';
import { AlertService } from './../../services/alert.service';
import { HttpService } from './../../services/http.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  CONSTANTS = CONSTANTS;
  isSubmitted: boolean;
  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private alertService: AlertService,
    private route: Router
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get controls() {
    return this.loginForm.controls;
  }

  changeForm() {

  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.isSubmitted = true;
      return;
    }
    this.httpService.post(this.CONSTANTS.APIS.AUTH.USER_LOGIN, this.loginForm.value).subscribe(result => {
      this.route.navigate(['./chat']);
    })
  }
}
