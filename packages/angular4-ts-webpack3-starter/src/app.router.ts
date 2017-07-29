import { Routes } from '@angular/router';

import { ListComponent } from './list';
import { DetailComponent } from './detail';
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
    path: 'list/:id',
    component: DetailComponent
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
