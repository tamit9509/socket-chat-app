import { CONSTANTS } from './../../utils/constants';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `<h1>Account is verified</h1>
  <a [routerLink]="['/login']">Login</a>
  `,
  styleUrls: ['../auth.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private route: Router) { }

  ngOnInit() {
    const data = this.activatedRoute.snapshot.params['token'];
    console.log(this.activatedRoute)
    this.httpService.post(`${CONSTANTS.APIS.AUTH.EMAIL_VERIFICATION}/${data}`, {}).subscribe(response => { });
  }

}
