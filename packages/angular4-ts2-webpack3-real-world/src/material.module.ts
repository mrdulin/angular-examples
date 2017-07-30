import { MdButtonModule, MdCheckboxModule, MdIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule
  ]
})
export class MaterialModule { }
