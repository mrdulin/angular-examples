import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum WebcareState {
  Saved = 'Saved',
  Completed = 'Completed',
  MarkedAsSpam = 'MarkedAsSpam',
}

export interface ITriggerMessageAction {
  messageId?: string;
  streamId?: string;
  newState: WebcareState;
}

@Injectable()
export class WebMessageService {
  private _onMessageActionTriggered = new BehaviorSubject<ITriggerMessageAction>(
    undefined
  );
  get onMessageActionTriggered$(): Observable<ITriggerMessageAction> {
    return this._onMessageActionTriggered.asObservable();
  }

  triggerMessageAction(actionDto: ITriggerMessageAction) {
    this._onMessageActionTriggered.next(actionDto);
  }
}
