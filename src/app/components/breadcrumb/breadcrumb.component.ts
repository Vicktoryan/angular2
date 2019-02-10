import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Breadcrumb } from '../../interfaces/Breadcrumb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: [ './breadcrumb.component.scss' ]
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [];
  private subscription: Subscription;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
  }

  public ngOnInit(): void {
    this.subscription = this.breadcrumbService.getBreadcrumbObserve().subscribe((breadcrumbs: Breadcrumb[]) => {
      this.breadcrumbs = breadcrumbs;
    });

    this.breadcrumbService.getItems();
  }

  public onClick(index: number): void {
    if (index === this.breadcrumbs.length - 1 && index > 0) return;
    this.router.navigate([ this.breadcrumbs[ index ].url ]);
    this.breadcrumbs.splice(index === 0 ? 1 : index, 100);
  }

}
