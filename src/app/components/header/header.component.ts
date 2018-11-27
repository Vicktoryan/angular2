import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) {

  }

  public ngOnInit(): void {
  }

  public exit(): void {
    this.commonService.logout();
  }

}
