import { NgModule } from '@angular/core';

import { GoToHospitalRoutingModule } from './goToHospital-routing.module';
import { HomePageComponent } from './homePage';

@NgModule({
  imports: [
    GoToHospitalRoutingModule
  ],
  declarations: [
    HomePageComponent
  ]
})
export class GoToHospitalModule { }
