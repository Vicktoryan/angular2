import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from '../../services/common.service';
import { HeaderService } from '../../services/header.service';
import { IUserInformation } from '../../interfaces/IUserInformation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  public isShowHeader: boolean = false;
  public userInformation: IUserInformation;
  public cService = CommonService;
  private subscription: Subscription;

  constructor(
    private commonService: CommonService,
    private headerService: HeaderService,
    private router: Router
  ) {

  }

  public ngOnInit(): void {
    this.subscription = this.headerService.getHeaderObserve().subscribe((isShow: boolean) => {
      this.isShowHeader = isShow;
    });
    //this.userInformation = this.commonService.getUserInformation();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public login(): void {
    this.headerService.notifyHeader(false);
    this.router.navigate([ '/login' ]);
  }

  public exit(): void {
    this.commonService.logout();
  }

}
