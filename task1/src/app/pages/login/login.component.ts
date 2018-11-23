import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Router} from "@angular/router";
import {CommonService} from "../../services/common.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = new FormControl('');
  password = new FormControl('');

  constructor(private commonService: CommonService,
              private alertService: AlertService,
              private router: Router) {
  }

  public ngOnInit(): void {
  }

  public singIn(): void {
    this.commonService.login(this.login.value, this.password.value)
      .then((isLogin: boolean) => {
        if (isLogin) {
          this.alertService.clearAlert();
          this.router.navigate(['/video']);
        } else {
          this.alertService.setAlert({
            type: 'error',
            message: `System doesn't have this user`
          });
        }
      });
  }
}
