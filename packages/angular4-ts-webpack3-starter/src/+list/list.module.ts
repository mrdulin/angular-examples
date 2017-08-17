import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './item.component';
import { ListRoutingModule } from './list-routing.module';
import { ComponentModule, PipeModule } from '../shared';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  imports: [
    ListRoutingModule,
    CommonModule,
    ComponentModule,
    PipeModule
  ]
})
export class ListModule { }

export function loadListModule() {
  return ListModule;
}
