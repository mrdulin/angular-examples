import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MessageComponent } from './message.component';
import {
  ITriggerMessageAction,
  WebcareState,
  WebMessageService,
} from './message.service';

describe('65291642', () => {
  let fixture: ComponentFixture<MessageComponent>;
  let component: MessageComponent;
  let messageService: WebMessageService;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MessageComponent],
        providers: [WebMessageService],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(MessageComponent);
          component = fixture.componentInstance;
          messageService = TestBed.inject(WebMessageService);
        });
    })
  );

  it('should handle click saved', () => {
    const testAction: ITriggerMessageAction = {
      messageId: '1',
      streamId: '1',
      newState: WebcareState.Saved,
    };

    const onClickSavedSpy = spyOn(component, 'onClickSaved').and.stub();
    messageService.triggerMessageAction(testAction);
    fixture.detectChanges();
    expect(onClickSavedSpy).toHaveBeenCalled();
    expect(component.subscriptions).toHaveSize(1);
  });

  it('should handle click completed', () => {
    const testAction: ITriggerMessageAction = {
      messageId: '1',
      streamId: '1',
      newState: WebcareState.Completed,
    };

    const onClickCompletedSpy = spyOn(component, 'onClickCompleted').and.stub();
    messageService.triggerMessageAction(testAction);
    fixture.detectChanges();
    expect(onClickCompletedSpy).toHaveBeenCalled();
    expect(component.subscriptions).toHaveSize(1);
  });

  it('should handle click completed', () => {
    const testAction: ITriggerMessageAction = {
      messageId: '1',
      streamId: '1',
      newState: WebcareState.MarkedAsSpam,
    };

    const onClickMarkedAsSpamSpy = spyOn(
      component,
      'onClickMarkedAsSpam'
    ).and.stub();
    messageService.triggerMessageAction(testAction);
    fixture.detectChanges();
    expect(onClickMarkedAsSpamSpy).toHaveBeenCalled();
    expect(component.subscriptions).toHaveSize(1);
  });
});
