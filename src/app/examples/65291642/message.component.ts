import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { WebcareState, WebMessageService } from './message.service';

@Component({
  selector: 'app-message',
  template: '<span>message component</span>',
})
export class MessageComponent {
  subscriptions = [];
  model = { id: '1' };
  stream = { streamId: '1' };

  constructor(private _messageService: WebMessageService) {}

  ngOnInit() {
    this._subscribeToActionsFromConversationHeader();
  }

  onClickSaved() {}
  onClickCompleted() {}
  onClickMarkedAsSpam() {}

  private _subscribeToActionsFromConversationHeader() {
    this.subscriptions.push(
      this._messageService.onMessageActionTriggered$
        .pipe(
          filter(
            (dto) =>
              dto?.messageId === this.model.id &&
              dto?.streamId === this.stream.streamId
          )
        )
        .subscribe((dto) => {
          switch (dto.newState) {
            case WebcareState.Saved: {
              this.onClickSaved();
              break;
            }
            case WebcareState.Completed: {
              this.onClickCompleted();
              break;
            }
            case WebcareState.MarkedAsSpam: {
              this.onClickMarkedAsSpam();
              break;
            }
          }
        })
    );
  }
}
