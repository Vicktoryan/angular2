import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCourseListComponent } from './item-course-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonService } from '../../../../services/common.service';
import { UserInformation } from '../../../../interfaces/UserInformation';
import { UserRules } from '../../../../enums/UserRules';

describe('ItemCourseListComponent', () => {
  let component: ItemCourseListComponent;
  let fixture: ComponentFixture<ItemCourseListComponent>;
  let commonService: CommonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ItemCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCourseListComponent);
    component = fixture.componentInstance;
    Object.assign(component, { item: { } });
    fixture.detectChanges();
    commonService = TestBed.get(CommonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.item.duration = 12.5;
    component.actions = [];
    const duration: string[] = (component.item.duration / 60).toString().split('.');
    expect(duration.length).toBeGreaterThan(0);
    expect(duration[0]).toBeDefined();
    expect(duration[1]).toBeDefined();

    const userInfo = {
      rules: [ '1', '2' ]
    };
    expect(userInfo.rules).toBeDefined();
    expect(userInfo.rules.length).toBeGreaterThan(0);
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
