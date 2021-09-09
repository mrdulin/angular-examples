import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ExampleComponent } from './example.component';

describe('65197197', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleComponent],
    });
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
  });
  it('should call toggleOption from setSaqOption if isTimeCompleted is false', fakeAsync(() => {
    component.isCMode = true;
    const tSpy = spyOn<any>(component, 'toggleOption');
    component.setOption();
    tick(1000);
    fixture.whenStable().then(() => {
      if (component.isCMode && !component.quest['isTimeCompleted']) {
        expect(tSpy).toHaveBeenCalled();
      }
    });
  }));
});
