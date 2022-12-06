import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  compactNavbar: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.compactNavbar = window.innerWidth < 1200 ? true : false;
    // console.log(event)
    // console.log(window.innerWidth)
  }

  title = 'Boilerplate Angular';

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en')
    this.translate.use('en')
  }
}
