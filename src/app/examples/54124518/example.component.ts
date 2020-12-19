import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({})
export class ExampleComponent {
  products: any[];
  constructor(private productService: ProductService) {}
  method() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
