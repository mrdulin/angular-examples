import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ExampleService {
  getSelectedEvent(): Observable<string> {
    return of('real trends page event listener');
  }
}
