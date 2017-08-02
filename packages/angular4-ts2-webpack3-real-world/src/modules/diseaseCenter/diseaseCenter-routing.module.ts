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
