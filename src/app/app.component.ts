import { Component } from '@angular/core';
import { PageRouterService } from './services/page-router.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public title = 'Task number one';
  public isHideHeader: boolean;

  private subscription: Subscription;
  constructor(
    private pageRouterService: PageRouterService
  ) {

  }

  ngOnInit(): void {
    this.subscription = this.pageRouterService.getRouterObserve().subscribe((pageName: string) => {
      this.isHideHeader = pageName === 'login';
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
