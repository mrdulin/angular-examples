import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './modules/sidebar';
import { ContentComponent } from './modules/content';
import { DiseaseCenterComponent } from './modules/diseaseCenter';
import { DoctorCenterComponent } from './modules/doctorCenter';

import { TagManagerModule } from './modules/tagManager';

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
        loadChildren: () => TagManagerModule
      },
      {
        path: 'disease-center',
        component: DiseaseCenterComponent
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
    redirectTo: 'disease-center',
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
