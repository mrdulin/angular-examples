import { Injectable } from '@angular/core';
import { AnimationStateService } from './animation-state.service';

@Injectable()
export class AnimationService {
  constructor(private animationStateService: AnimationStateService) {}
  start() {
    return this.animationStateService.status;
  }
}
