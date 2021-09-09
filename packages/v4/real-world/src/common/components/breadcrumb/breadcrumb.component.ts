import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService, ISidebarNav } from 'common/services';

interface IUrl {
  name: string;
  key: string;
}

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public urls: IUrl[] = [];
  private navs: ISidebarNav[] = [];
  private _routerSubscription: Subscription;

  constructor(
    private _router: Router,
    private _navigationService: NavigationService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getFlattenNavs(this._navigationService.navs);
    this.generateBreadcrumbTrail(this._router.url);

    this._routerSubscription = this._router.events.subscribe((navigationEnd: NavigationEnd) => {
      if (navigationEnd instanceof NavigationEnd) {
        this.urls.length = 0;
        const url: string = navigationEnd.urlAfterRedirects || navigationEnd.url;
        this.generateBreadcrumbTrail(url);
      }
    });
  }

  ngOnDestroy() {
    this._routerSubscription.unsubscribe();
  }

  getFlattenNavs(navs: ISidebarNav[]): void {
    for (let nav of navs) {
      const isExist: boolean = this.navs.findIndex((flattenNav) => flattenNav.key === nav.key) > -1;
      if (nav.children && !isExist) {
        this.getFlattenNavs(nav.children);
      }
      this.navs.push(nav);
    }
  }

  generateBreadcrumbTrail(url: string): void {

    const urls: string[] = url.split('/').filter(x => x);
    urls.forEach((url: string) => {

      const nav: ISidebarNav = this.navs.find((nav: ISidebarNav) => nav.key === url);

      this.urls.push({
        key: url,
        name: nav.name
      });
    });

    const isRoot: boolean = url.lastIndexOf('/') > 0;
    if (!isRoot) {
      const fragment: string = url.substr(0, url.lastIndexOf('/'));
      this.generateBreadcrumbTrail(fragment);
    }
  }
}
