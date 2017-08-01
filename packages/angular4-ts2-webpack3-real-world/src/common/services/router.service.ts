import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { StringService } from 'common/services';

interface IMod {
  key: string;
  name: string;
  async: boolean;
  path: string;
}

@Injectable()
export class RouterService {

  constructor(
    private _stringService: StringService
  ) { }

  loadAsyncRoutes(mods: IMod[]): Route[] {
    const routes: Route[] = [];

    for (let mod of mods) {
      if (mod.async) {
        const name: string = mod.key;
        const moduleName = this._stringService.capitalizeFirstLetter(`${name}Module`);
        console.log(moduleName);
        const route: Route = {
          path: '',
          // loadChildren: `../${name}/${name}.module#${moduleName}`
          loadChildren: mod.path
        };
        routes.push(route);
      }
    }
    return routes;
  }
}
