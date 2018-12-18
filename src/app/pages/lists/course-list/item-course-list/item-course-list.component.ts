import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../../../../interfaces/CourseItem';
import { CommonService } from '../../../../services/common.service';
import { UserInformation } from '../../../../interfaces/UserInformation';
import { Actions } from '../../../../interfaces/Actions';
import { UserRules } from '../../../../enums/UserRules';

@Component({
  selector: 'app-item-course-list',
  templateUrl: './item-course-list.component.html',
  styleUrls: [ './item-course-list.component.scss' ],
  inputs: ['item']
})
export class ItemCourseListComponent implements OnInit {
  @Input() item: CourseItem;
  @Output() remove = new EventEmitter();;
  public actions: Actions[] = [];

  constructor(
    private commonService: CommonService
  ) {
  }

  ngOnInit() {
    const userInfo: UserInformation = CommonService.getUserInformation();
    if (userInfo.rules && userInfo.rules.length > 0) {
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
        this.remove.emit();
        break;
      }
      default:
        break;
    }
  }
}
