import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home';
import { tagManagerComponent } from './modules/tagManager';
import { SidebarComponent } from './modules/sidebar';
import { ContentComponent } from './modules/content';
import { DiseaseCenterComponent } from './modules/diseaseCenter';
import { DoctorCenterComponent } from './modules/doctorCenter';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        children: [
          {
            path: 'tag-manager',
            component: tagManagerComponent
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
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tag-manager',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/tag-manager',
    pathMatch: 'full'
  }
]
