import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRouterModule } from './detail-routing.module';

import { PipeModule } from '../shared';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    PipeModule,
    CommonModule,
    DetailRouterModule
  ]
})
export class DetailModule {

}
