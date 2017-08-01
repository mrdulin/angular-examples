import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagManagerRoutingModule } from './tm-routing.module';

import { SicknessComponent } from './sickness';
import { DepartmentComponent } from './department';
import { AttributeComponent } from './attribute';

@NgModule({
  declarations: [
    SicknessComponent,
    DepartmentComponent,
    AttributeComponent
  ],
  imports: [
    TagManagerRoutingModule
  ]
})
export class TagManagerModule {

}
