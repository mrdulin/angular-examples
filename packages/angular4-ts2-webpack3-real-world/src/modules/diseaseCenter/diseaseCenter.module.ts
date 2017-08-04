import { NgModule } from '@angular/core';

import { diseaseHomeComponent } from './diseaseHome';
import { entranceManagerComponent } from './diseaseHome/entranceManager';
import { UploadModule } from '../../common/components/upload';
import { uploadComponent } from '../../common/components/upload/upload.component';

import { DiseaseCenterRoutingModule } from './diseaseCenter-routing.module';
import { DiseaseCenterMaterialModule } from './diseaseCenter-material.module';

@NgModule({
  declarations: [
    uploadComponent,
    diseaseHomeComponent,
    entranceManagerComponent
  ],
  imports: [
    UploadModule,
    DiseaseCenterRoutingModule,
    DiseaseCenterMaterialModule
  ]
})
export class DiseaseCenterModule { }
