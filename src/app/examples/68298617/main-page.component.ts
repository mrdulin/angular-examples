import { Component } from '@angular/core';
import { EmitterService } from './emitter.service';

@Component({})
export class MainPageComponent {
  helpValue;
  constructor(public emitter: EmitterService) {}

  getHelpDisplay(helpItem: any) {
    this.helpValue = helpItem;
    this.emitter.helpDisplayEmitter.emit(this.helpValue);
  }
}
