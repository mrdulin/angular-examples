import { NgModule } from '@angular/core';

import { diseaseHomeComponent } from './diseaseHome';
import { entranceManagerComponent } from './diseaseHome/entranceManager';
import { uploadComponent } from './diseaseHome/upload';

import { DiseaseCenterRoutingModule } from './diseaseCenter-routing.module';
import { DiseaseCenterMaterialModule } from './diseaseCenter-material.module';

@NgModule({
  declarations: [
    diseaseHomeComponent,
    entranceManagerComponent,
    uploadComponent
  ],
  imports: [
    DiseaseCenterRoutingModule,
    DiseaseCenterMaterialModule
  ]
})
export class DiseaseCenterModule { }
