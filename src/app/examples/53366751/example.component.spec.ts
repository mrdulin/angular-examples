import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ExampleComponent } from './example.component';
import { NotificationService } from './notification.service';

class NotificationStub {
  done() {
    console.log('fake implementation');
  }
}

describe('53366751', () => {
  let fixture: ComponentFixture<ExampleComponent>;
  let component: ExampleComponent;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ExampleComponent],
        providers: [
          { provide: NotificationService, useClass: NotificationStub },
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ExampleComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should pass', () => {
    const doneSpy = spyOn(NotificationStub.prototype, 'done').and.callThrough();
    fixture.detectChanges();
    expect(doneSpy).toHaveBeenCalled();
  });
});
