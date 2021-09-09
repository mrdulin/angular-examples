import { Injectable } from '@angular/core';

@Injectable()
export class SocketService {
  getSocketIOConnector(params) {
    return this;
  }
  on(event, listener) {}
}
