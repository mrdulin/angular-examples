import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './modules/sidebar';
import { ContentComponent } from './modules/content';

import { DoctorCenterModule } from './modules/doctorCenter';
import { TagManagerModule } from './modules/tagManager';
import { DiseaseCenterModule } from './modules/diseaseCenter';

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
        loadChildren: './modules/diseaseCenter/diseaseCenter.module#DiseaseCenterModule'
      },
      {
        path: '',
        loadChildren: './modules/doctorCenter/doctorCenter.module.ts#DoctorCenterModule'
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
