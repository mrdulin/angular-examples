import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForTestingComponent } from './for-testing.component';

const routes: Routes = [
  {
    path: 't',
    component: ForTestingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ForTestingRoutingModule {

}
