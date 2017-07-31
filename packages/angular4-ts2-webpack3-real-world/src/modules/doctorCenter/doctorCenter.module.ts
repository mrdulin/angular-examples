import { NgModule } from '@angular/core';

import { DoctorCenterRoutingModule } from './doctorCenter-routing.module';
import { HospitalManagerComponent } from './hospitalManager';

@NgModule({
  declarations: [
    HospitalManagerComponent
  ],
  imports: [
    DoctorCenterRoutingModule
  ]
})
export class DoctorCenterModule { }
