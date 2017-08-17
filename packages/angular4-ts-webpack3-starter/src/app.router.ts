import { Routes } from '@angular/router';

import { ListComponent } from './list';
import { CollectionComponent } from './collection';
import { EditComponent } from './edit';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: '',
    loadChildren: './+detail/detail.module#DetailModule?chunkName=DetailModule'
  },
  {
    path: 'collection',
    component: CollectionComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];
