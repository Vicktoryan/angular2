import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public title = 'Project';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {

  }
}
