import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

import { ModalService } from './services/modal/modal.service';

import { ModalComponent } from './services/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Boilerplate Angular';
  compactNavbar: boolean = false;

  @ViewChild('modalComponent') modalComponent!: ModalComponent;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.compactNavbar = window.innerWidth < 1200 ? true : false;
  }

  constructor(
    private translate: TranslateService,
    private modalService: ModalService
  ) {

    this.translate.setDefaultLang('en')
    this.translate.use('en')
  }

  ngAfterViewInit(): void {
    this.modalService.modal = this.modalComponent;
  }
}
