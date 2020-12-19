import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { ExampleComponent } from './example.component';
import { ProductService } from './product.service';

describe('54124518', () => {
  let productServiceStub: jasmine.SpyObj<ProductService>;
  let fixture: ComponentFixture<ExampleComponent>;
  let component: ExampleComponent;
  beforeEach(
    waitForAsync(() => {
      productServiceStub = jasmine.createSpyObj('ProductService', [
        'getProducts',
      ]);

      TestBed.configureTestingModule({
        declarations: [ExampleComponent],
        providers: [{ provide: ProductService, useValue: productServiceStub }],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ExampleComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should pass', () => {
    productServiceStub.getProducts.and.returnValue(of(['fake implementation']));
    component.method();
    expect(component.products).toEqual(['fake implementation']);
    expect(productServiceStub.getProducts).toHaveBeenCalled();
  });
});
