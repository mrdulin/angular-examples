import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SicknessComponent } from './sickness';
import { DepartmentComponent } from './department';
import { AttributeComponent } from './attribute';

export const routes: Routes = [
  {
    path: 'tag-manager',
    data: {
      name: '标签管理'
    },
    children: [
      {
        path: '',
        redirectTo: 'sickness',
        pathMatch: 'full'
      },
      {
        path: 'sickness',
        component: SicknessComponent,
        data: {
          name: '标准疾病管理'
        }
      },
      {
        path: 'department',
        component: DepartmentComponent,
        data: {
          name: '标准科室管理'
        }
      },
      {
        path: 'attribute',
        component: AttributeComponent,
        data: {
          name: '属性库管理'
        }
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

