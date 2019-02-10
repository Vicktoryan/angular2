import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCourseListComponent } from './item-course-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonService } from '../../../../services/common.service';
import { UserRules } from '../../../../enums/UserRules';
import { ItemStateDirective } from '../../../../directives/item-state.directive';
import { DurationPipe } from '../../../../pipes/duration.pipe';
import { UserInformation } from '../../../../interfaces/UserInformation';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ItemCourseListComponent', () => {
  let component: ItemCourseListComponent;
  let fixture: ComponentFixture<ItemCourseListComponent>;
  let commonService: CommonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ItemCourseListComponent, ItemStateDirective, DurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCourseListComponent);
    component = fixture.componentInstance;
    Object.assign(component, { item: {} });
    fixture.detectChanges();
    commonService = TestBed.get(CommonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.actions = [];
    const userInfo = {
      rules: [ '1', '2' ]
    };
    let compare = userInfo.rules && userInfo.rules.length > 0;
    expect(compare).toBeTruthy();
    expect(userInfo.rules).toContain(UserRules.MODIFY_COURSE);
    expect(userInfo.rules).toContain(UserRules.REMOVE_COURSE);
  });

  it('should click doAction', () => {
    component.doAction('');
    fixture.detectChanges();

    component.doAction('modify');
    fixture.detectChanges();

    component.doAction('remove');
    fixture.detectChanges();
  });

});
