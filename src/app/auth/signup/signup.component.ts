import { CONSTANTS } from './../../utils/constants';
import { Router } from '@angular/router';
import { AlertService } from './../../services/alert.service';
import { HttpService } from './../../services/http.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/users.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../auth.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  CONSTANTS = CONSTANTS;
  isSubmitted: boolean;
  constructor(private fb: FormBuilder, private httpService: HttpService, private alertService: AlertService, private route: Router) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get controls() {
    return this.signupForm.controls;
  }

  changeForm(formType) {
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.isSubmitted = true;
      return;
    }
    let user = new User(this.signupForm.value);
    this.httpService.post(this.CONSTANTS.APIS.AUTH.USER_REGISTER, user).subscribe((response: any) => {
      this.alertService.successToast((response || {}).emailMessage);
    }, (error) => {
      this.alertService.errorToast(error.error.message)
    });
  }


}
