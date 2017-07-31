import { NgModule } from '@angular/core';

import { HomeComponent } from './home';

import { DiseaseCenterRoutingModule } from './diseaseCenter-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    DiseaseCenterRoutingModule
  ]
})
export class DiseaseCenterModule { }
