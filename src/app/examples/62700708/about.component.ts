import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
})
export class AboutComponent implements OnInit {
  private aboutServiceSubscription: Subscription;
  dataList: any;
  locales: any = {};
  translator: any;

  constructor(public aboutService: AboutService) {}

  ngOnInit() {
    this.aboutServiceSubscription = this.aboutService
      .getAboutInfo()
      .subscribe((data: any) => {
        if (data) {
          data = data.split('/');
          this.dataList = data;
        }
      });
  }
}
