import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './modules/sidebar';
import { ContentComponent } from './modules/content';
import { DoctorCenterComponent } from './modules/doctorCenter';

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
      {
        path: '',
        // 同步加载
        loadChildren: () => TagManagerModule
      },
      {
        path: '',
        // TODO: 异步加载
        // loadChildren: './modules/diseaseCenter/dc.module.ts#DiseaseCenterModule'
        loadChildren: () => DiseaseCenterModule
      },
      {
        path: 'doctor-center',
        component: DoctorCenterComponent
      }
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
