import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagManagerRoutingModule } from './tm-routing.module';

import { SicknessComponent } from './sickness';

@NgModule({
  declarations: [
    SicknessComponent
  ],
  imports: [
    TagManagerRoutingModule
  ]
})
export class TagManagerModule {

}
