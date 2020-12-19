import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ProductService {
  getProducts() {
    return of(['Your real implementation']);
  }
}
