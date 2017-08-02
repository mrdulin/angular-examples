import { NgModule } from '@angular/core';

import { diseaseHomeComponent } from './diseaseHome';

import { DiseaseCenterRoutingModule } from './diseaseCenter-routing.module';

@NgModule({
  declarations: [
    diseaseHomeComponent
  ],
  imports: [
    DiseaseCenterRoutingModule
  ]
})
export class DiseaseCenterModule { }
