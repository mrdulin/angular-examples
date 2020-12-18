import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({})
export class OndemandComponent implements OnInit {
  socket: SocketService;
  data = {
    product: 'real product',
  };
  connectionMsg: string;
  constructor(private socketService: SocketService) {}
  ngOnInit() {
    this.socket = this.socketService.getSocketIOConnector(this.data.product);
    this.socket.on('connected', (message: string) => {
      this.connectionMsg = message;
    });
  }
}
