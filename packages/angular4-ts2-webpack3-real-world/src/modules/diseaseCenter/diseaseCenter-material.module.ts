import { NgModule } from '@angular/core';
import {
  MdTabsModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  imports: [
    CdkTableModule,
    MdTabsModule
  ],
  exports: [
    CdkTableModule,
    MdTabsModule
  ]
})
export class DiseaseCenterMaterialModule {

}
