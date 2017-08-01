import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SicknessComponent } from './sickness';
import { DepartmentComponent } from './department';
import { AttributeComponent } from './attribute';

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
      },
      {
        path: 'department',
        component: DepartmentComponent
      },
      {
        path: 'attribute',
        component: AttributeComponent
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

