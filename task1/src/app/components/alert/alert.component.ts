import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {IAlert} from "../../interfaces/IAlert";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  public alerts: {
    message: string,
    type: string
  }[] = [];
  subscription: Subscription;

  constructor(private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe(alerts => {
      this.alerts = alerts;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public close(alert: IAlert): void {
    this.alertService.removeAlert(alert);
  }
}
