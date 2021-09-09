import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar';
import { ContentComponent } from './content';

import { TagManagerModule } from '../tagManager';
import { RouterService } from 'common/services';

import * as config from 'root/config/modules.json';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tag-manager',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentComponent,
    children: [
      // -- 同步预加载特性模块 --
      {
        path: '',
        loadChildren: () => TagManagerModule
      },
      // --

      // -- 异步加载的特性模块 --
      {
        path: '',
        loadChildren: '../diseaseCenter/diseaseCenter.module#DiseaseCenterModule'
      },
      {
        path: '',
        loadChildren: '../doctorCenter/doctorCenter.module.ts#DoctorCenterModule'
      },
      {
        path: '',
        loadChildren: '../goToHospital/goToHospital.module.ts#GoToHospitalModule'
      }
      // --
    ]
  },
  {
    path: '',
    outlet: 'sidebar',
    component: SidebarComponent
  },
  {
    path: '**',
    redirectTo: 'tag-manager',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [RouterService]
})
export class AppRoutingModule {
  constructor(
    private _router: Router,
    private _routerService: RouterService
  ) {
    // this.loadAsyncRoutes();
  }

  // private loadAsyncRoutes() {
  //   const asyncRoutes: any[] = this._routerService.loadAsyncRoutes((<any>config).mods);
  //   asyncRoutes.forEach((route: any) => {
  //     routes[1].children.push(route);
  //   });
  //   this._router.resetConfig(routes);
  //   console.log(this._router.config);
  // }

}
