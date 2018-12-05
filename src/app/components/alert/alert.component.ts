import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Alert } from "../../interfaces/Alert";
import { AlertService } from "../../services/alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: [ './alert.component.scss' ]
})
export class AlertComponent implements OnInit {
  public alerts: {
    message: string,
    type: string
  }[] = [];
  subscription: Subscription;

  constructor(private alertService: AlertService) {
  }

  public ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe(alerts => {
      this.alerts = alerts;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public close(alert: Alert): void {
    this.alertService.removeAlert(alert);
  }
}
