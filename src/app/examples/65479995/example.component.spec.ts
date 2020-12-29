import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ExampleComponent } from './example.component';
import { ExampleService } from './example.service';

describe('65479995', () => {
  let fixture: ComponentFixture<ExampleComponent>;
  let component: ExampleComponent;
  let exampleServiceSpy: jasmine.SpyObj<ExampleService>;
  beforeEach(
    waitForAsync(() => {
      exampleServiceSpy = jasmine.createSpyObj('ExampleService', ['getThings']);
      exampleServiceSpy.getThings.and.returnValue(of('fake implementation'));

      TestBed.configureTestingModule({
        declarations: [ExampleComponent],
        imports: [FormsModule],
        providers: [{ provide: ExampleService, useValue: exampleServiceSpy }],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ExampleComponent);
          component = fixture.componentInstance;
        });
    })
  );
  it('should pass', () => {
    expect(component.otherProperty).toBeUndefined();
    fixture.detectChanges();
    expect(component.otherProperty).toBe('fake implementation');
    expect(exampleServiceSpy.getThings).toHaveBeenCalled();
  });
});
