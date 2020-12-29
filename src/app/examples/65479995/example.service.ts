import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ExampleService {
  constructor() {}
  getThings() {
    return of('your real implementation');
  }
}
