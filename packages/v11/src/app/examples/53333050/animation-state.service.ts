import { Injectable } from '@angular/core';

export enum AnimationStatus {
  Stopped = 'Stopped',
  Started = 'Started',
}

@Injectable()
export class AnimationStateService {
  state = {
    animation: {
      status: AnimationStatus.Started,
    },
  };
  public get status(): AnimationStatus {
    return this.state.animation.status;
  }
}
