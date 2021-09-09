import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { Component2 } from './example.component';
import { Service } from './example.service';

class MockService {
  private subject = new Subject<any>();

  getSubject() {
    return this.subject;
  }

  setSubject(value: string) {
    this.subject.next({ message: value });
  }
}

describe('52263178', () => {
  let fixture: ComponentFixture<Component2>;
  let component: Component2;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Component2],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [{ provide: Service, useClass: MockService }],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(Component2);
    component = fixture.componentInstance;
  });

  it(
    'should test subscription',
    waitForAsync(() => {
      expect(component.textFromComponent1).toBeUndefined();
      fixture.detectChanges();
      component.service.setSubject('abc');
      fixture.whenStable().then(() => {
        expect(component.textFromComponent1).toBe('abc');
      });
    })
  );
});
