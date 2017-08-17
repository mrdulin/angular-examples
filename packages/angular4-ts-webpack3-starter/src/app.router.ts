import { Routes } from '@angular/router';

import { CollectionComponent } from './collection';
import { EditComponent } from './edit';
import { loadListModule } from './list';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: loadListModule
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
