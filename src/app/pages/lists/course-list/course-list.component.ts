import { Component, OnInit } from '@angular/core';
import { CourseListService } from './course-list.service';
import { CourseItem } from '../../../interfaces/CourseItem';
import { UserInformation } from '../../../interfaces/UserInformation';
import { CommonService } from '../../../services/common.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [ './course-list.component.scss' ]
})
export class CourseListComponent implements OnInit {
  public items: CourseItem[] = [];
  public userInfo: UserInformation;

  constructor(
    private router: Router,
    private courseListService: CourseListService,
    private breadcrumbService: BreadcrumbService
  ) {
  }

  public ngOnInit() {
    this.loadData();
    this.userInfo = CommonService.getUserInformation();
    console.log(this.userInfo.id);
  }

  public onRemove(): void {
    console.log('Test');
  }

  public onSearch(search: string): void {
    this.loadData(search);
  }

  public onAdd(): void {
    this.breadcrumbService.setItem('New course', ``);
    this.router.navigate(['/course/new']);
  }



  private loadData(search: string = null): void {
    this.courseListService.getItems(search).then((items: CourseItem[]) => {

      this.items = items;
    });
  }
}
