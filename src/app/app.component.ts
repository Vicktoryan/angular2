import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public title = 'Task number one';

  constructor() {

  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {

  }
}
