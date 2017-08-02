import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { diseaseHomeComponent } from './diseaseHome';

const routes: Routes = [
  {
    path: 'disease-center',
    children: [
      {
        path: '',
        redirectTo: 'disease-home',
        pathMatch: 'full'
      },
      {
        path: 'disease-home',
        component: diseaseHomeComponent
      },
      {
        path: 'specialist-home',
        component: diseaseHomeComponent
      },
      {
        path: 'hospital-home',
        component: diseaseHomeComponent
      },
      {
        path: 'doctor-home',
        component: diseaseHomeComponent
      },
      {
        path: 'serve-city',
        component: diseaseHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DiseaseCenterRoutingModule { }
