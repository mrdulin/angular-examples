import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ExampleComponent } from './example.component';
import { ExampleService } from './example.service';

describe('55234033', () => {
  let exampleServiceSpy: jasmine.SpyObj<ExampleService>;
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;
  beforeEach(() => {
    exampleServiceSpy = jasmine.createSpyObj('ExampleService', [
      'getSelectedEvent',
    ]);
    exampleServiceSpy.getSelectedEvent.and.returnValue(
      of('fake trend page event listener')
    );

    TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      providers: [{ provide: ExampleService, useValue: exampleServiceSpy }],
    });

    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('should pass', () => {
    expect(component.trendsPageEventListener).toBeUndefined();
    fixture.detectChanges();
    expect(component.trendsPageEventListener).toBe(
      'fake trend page event listener'
    );
    expect(exampleServiceSpy.getSelectedEvent).toHaveBeenCalledTimes(1);
  });
});
