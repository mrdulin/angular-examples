import { Component, OnInit } from '@angular/core';
import { NavigationService, ISidebarNav } from 'common/services';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public navs: ISidebarNav[] = [];

  constructor(
    private _navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.navs = this._navigationService.navs;
  }

}
