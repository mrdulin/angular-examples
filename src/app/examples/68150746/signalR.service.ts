import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  hubConnection;
  constructor() {
    this.hubConnection = {
      onclose() {},
    };
  }
}
