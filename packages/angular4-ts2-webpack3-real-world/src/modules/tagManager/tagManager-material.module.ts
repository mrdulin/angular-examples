import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdPaginatorModule,
  MdCardModule,
  MdDialogModule, MdIconModule, MdInputModule,
  MdTableModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  imports: [
    CdkTableModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdPaginatorModule,
    MdTableModule
  ],
  exports: [
    CdkTableModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdPaginatorModule,
    MdTableModule
  ]
})
export class TagManagerMaterialModule {

}
