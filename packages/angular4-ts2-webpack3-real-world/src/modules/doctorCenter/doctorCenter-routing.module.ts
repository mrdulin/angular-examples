import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalManagerComponent } from './hospitalManager';

const routes: Routes = [
  {
    path: 'doctor-center',
    children: [
      {
        path: '',
        redirectTo: 'hospital-manager',
        pathMatch: 'full'
      },
      {
        path: 'hospital-manager',
        component: HospitalManagerComponent
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
export class DoctorCenterRoutingModule { }
