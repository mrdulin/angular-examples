import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForTestingRoutingModule } from './for-testing-routing.module';
import { FormsModule } from '@angular/forms';

import { ForTestingComponent } from './for-testing.component';
import { AmountComponent } from './amount';
import { NgForRadiosComponent } from './ngFor-radios';
import { BgColorDirective } from './bg-color';
import { UnlessDirective } from './unless';
import { NgTemplateOutletTestingComponent } from './ngTemplateOutlet-testing';
import { MyChildComponent, MyParentComponent } from './@ViewChild-and-@ContentChild-example';

@NgModule({
  declarations: [
    ForTestingComponent,
    AmountComponent,
    NgForRadiosComponent,
    NgTemplateOutletTestingComponent,
    MyChildComponent, MyParentComponent,
    BgColorDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ForTestingRoutingModule
  ]
})
export class ForTestingModule {

}
