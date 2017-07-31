import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SicknessComponent } from './sickness';

export const routes: Routes = [
  {
    path: 'tag-manager',
    children: [
      {
        path: '',
        redirectTo: 'sickness',
        pathMatch: 'full'
      },
      {
        path: 'sickness',
        component: SicknessComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TagManagerRoutingModule {

}

