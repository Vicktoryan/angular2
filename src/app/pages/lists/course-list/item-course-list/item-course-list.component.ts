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
    const duration: string[] = (this.item.duration / 60).toString().split('.');
    this.item.durationHour = +duration[0] > 0 ? `${duration[0]}h ` : '';
    const minutes: number = Math.round(+(`0.${duration[1]}`)* 60);
    this.item.durationMinutes = +minutes > 0 ? `${minutes}min` : '';

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
