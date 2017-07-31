import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home';

const routes: Routes = [
  {
    path: 'disease-center',
    children: [
      {
        path: 'home',
        component: HomeComponent
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
