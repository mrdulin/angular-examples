import { Injectable } from '@angular/core';
import { SignalRService } from './signalR.service';

@Injectable({
  providedIn: 'root',
})
export class CloseConnectionHandlerService {
  constructor(private signalRService: SignalRService) {}

  public initialize(): void {
    this.signalRService.hubConnection?.onclose((error: any) => {
      if (error) {
        console.error(error);
      }
    });
  }
}
