import { Routes } from '@angular/router';

import { CollectionComponent } from './collection';
import { EditComponent } from './edit';

import { loadListModule } from './+list';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',

    // 注意：下面这种方式，aot编译成功，但是通过webpack打包时，angular-router-loader不能正确处理
    // 报错：https://stackoverflow.com/questions/45713345/angular2-runtime-compiler-is-not-loaded
    // https://github.com/brandonroberts/angular-router-loader/issues/85
    // loadChildren: loadListModule

    // 同步加载解决方案：
    loadChildren: './+list/list.module#ListModule?chunkName=ListModule&sync=true'

    // 惰性加载
    // loadChildren: './+list/list.module#ListModule?chunkName=ListModule'
  },
  {
    path: '',
    loadChildren: './+detail/detail.module#DetailModule?chunkName=DetailModule'
  },
  {
    path: '',
    loadChildren: './+for-testing/for-testing.module#ForTestingModule?chunkName=ForTestingModule'
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
