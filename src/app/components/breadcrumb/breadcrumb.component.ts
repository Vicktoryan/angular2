import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Breadcrumb } from '../../interfaces/Breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: [ './breadcrumb.component.scss' ]
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [];
  private subscription: Subscription;

  constructor(
    private breadcrumbService: BreadcrumbService
  ) {
  }

  public ngOnInit(): void {
    this.subscription = this.breadcrumbService.getBreadcrumbObserve().subscribe((breadcrumbs: Breadcrumb[]) => {
      this.breadcrumbs = breadcrumbs;
    });

    this.breadcrumbService.getItems();
  }

}
