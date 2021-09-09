import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class TransfersService {
  transfers$ = of('real observable');
}
