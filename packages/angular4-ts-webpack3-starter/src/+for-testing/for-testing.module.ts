import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForTestingRoutingModule } from './for-testing-routing.module';
import { FormsModule } from '@angular/forms';

import { ForTestingComponent } from './for-testing.component';
import { AmountComponent } from './amount';
import { NgForRadiosComponent } from './ngFor-radios';

@NgModule({
  declarations: [
    ForTestingComponent,
    AmountComponent,
    NgForRadiosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ForTestingRoutingModule
  ]
})
export class ForTestingModule {

}
