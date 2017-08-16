import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from '../compiled/aot/src/app.module.ngfactory';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .catch((err: any) => {
    console.log('ERROR Bootstrapping Angular 2 AOT! \n');
    console.error(err);
  });
