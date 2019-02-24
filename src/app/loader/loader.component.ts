import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent implements OnInit {
  private subscription: Subscription;

  public isLoad: boolean = false;
  constructor(
    private loaderService: LoaderService
  ) { }

  public ngOnInit(): void {
    this.subscription = this.loaderService.getLoader().subscribe((isLoad: boolean) => {
      this.isLoad = isLoad;
    });
  }

}
