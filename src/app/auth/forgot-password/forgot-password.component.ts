import { CONSTANTS } from './../../utils/constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss', '../auth.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  isSubmitted: Boolean;
  CONSTANTS = CONSTANTS;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  get controls() {
    return this.forgotForm.controls;
  }
  onSubmit() {
    if (this.forgotForm.invalid) {
      this.isSubmitted = true;
    }

  }

}
