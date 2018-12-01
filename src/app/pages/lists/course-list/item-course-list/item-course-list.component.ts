import { Component, OnInit, Input } from '@angular/core';
import { ICourseItem } from '../../../../interfaces/ICourseItem';
import { CommonService } from '../../../../services/common.service';
import { IUserInformation } from '../../../../interfaces/IUserInformation';
import { IActions } from '../../../../interfaces/IActions';
import { UserRules } from '../../../../enums/UserRules';

@Component({
  selector: 'app-item-course-list',
  templateUrl: './item-course-list.component.html',
  styleUrls: [ './item-course-list.component.scss' ]
})
export class ItemCourseListComponent implements OnInit {
  @Input() item: ICourseItem;
  public actions: IActions[] = [];

  constructor(
    private commonService: CommonService
  ) {
  }

  ngOnInit() {
    const userInfo: IUserInformation = CommonService.getUserInformation();
    if (userInfo.rules) {
      if (userInfo.rules.includes(UserRules.MODIFY_COURSE)) {
        this.actions.push({
          name: 'modify',
          actionName: 'modify',
          color: 'green'
        });
      }

      if (userInfo.rules.includes(UserRules.REMOVE_COURSE)) {
        this.actions.push({
          name: 'remove',
          actionName: 'remove',
          color: 'red'
        });
      }

    }
  }

  public doAction(actionName: string): void {
    switch (actionName) {
      case 'modify': {

        break;
      }
      case 'remove': {
        break;
      }
      default:
        break;
    }
  }
}
