import { Component, OnDestroy } from '@angular/core';

@Component({})
export class BComponent implements OnDestroy {
  isDownloaded = false;
  public ngOnDestroy() {
    delete this.isDownloaded;
  }
}
