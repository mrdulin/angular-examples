import { MdButtonModule, MdCheckboxModule, MdIconModule, MdGridListModule, MdListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdListModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdListModule
  ]
})
export class MaterialModule { }
