import { NgModule } from '@angular/core';

import { diseaseHomeComponent } from './diseaseHome';

import { DiseaseCenterRoutingModule } from './diseaseCenter-routing.module';
import { DiseaseCenterMaterialModule } from './diseaseCenter-material.module'

@NgModule({
  declarations: [
    diseaseHomeComponent
  ],
  imports: [
    DiseaseCenterRoutingModule,
    DiseaseCenterMaterialModule
  ]
})
export class DiseaseCenterModule { }
