import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({})
export class ExampleComponent implements OnInit {
  constructor(private notification: NotificationService) {}

  ngOnInit() {
    this.notification.done();
  }
}
