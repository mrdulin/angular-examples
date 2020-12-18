import { Component, NgZone } from '@angular/core';
import { ExampleService } from './example.service';

@Component({})
export class ExampleComponent {
  trendsPageEventListener: any;
  constructor(private service: ExampleService, private zone: NgZone) {}
  ngOnInit() {
    this.service.getSelectedEvent().subscribe((trendsPageEventListener) => {
      this.zone.run(() => {
        this.trendsPageEventListener = trendsPageEventListener;
      });
    });
  }
}
