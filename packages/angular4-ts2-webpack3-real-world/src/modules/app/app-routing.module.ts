import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar';
import { ContentComponent } from './content';

import { DoctorCenterModule } from '../doctorCenter';
import { TagManagerModule } from '../tagManager';
import { DiseaseCenterModule } from '../diseaseCenter';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tag-manager',
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
    redirectTo: '/tag-manager',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
