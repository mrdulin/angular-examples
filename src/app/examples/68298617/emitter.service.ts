import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterService {
  public helpDisplayEmitter: EventEmitter<string> = new EventEmitter();
}
