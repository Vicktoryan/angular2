import { Component, OnInit } from '@angular/core';
import { CourseListService } from './course-list.service';
import { CourseItem } from '../../../interfaces/CourseItem';
import { UserInformation } from '../../../interfaces/UserInformation';
import { CommonService } from '../../../services/common.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [ './course-list.component.scss' ]
})
export class CourseListComponent implements OnInit {
  public items: CourseItem[] = [];
  public userInfo: UserInformation;
  private subscription: Subscription;

  private searchText: string;
  constructor(
    private router: Router,
    private courseListService: CourseListService,
    private breadcrumbService: BreadcrumbService
  ) {
  }

  public ngOnInit() {
    this.userInfo = CommonService.getUserInformation();

    this.subscription = this.courseListService.getItemsObserve().subscribe((items: CourseItem[]) => {
      this.items = items;
    });
    this.courseListService.notifyGetItems();
  }

  public onRemove(): void {

  }

  public onSearch(search: string): void {
    this.courseListService.notifyGetItems(search);
    this.searchText = search;
  }

  public onAdd(): void {
    this.breadcrumbService.setItem('New course', ``);
    this.router.navigate(['/course/new']);
  }

  public onLoadMore(): void {
    this.courseListService.notifyGetItems(this.searchText, true);
  }
}
