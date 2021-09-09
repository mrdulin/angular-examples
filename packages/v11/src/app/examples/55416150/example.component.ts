import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `
    <video (loadedmetadata)="videoResolutionTest($event)">
      <source type="video/mp4" />
    </video>
  `,
})
export class VideoComponent {
  videoResolutionTest(evt: KeyboardEvent) {
    const currentVideo = evt.target as HTMLVideoElement;

    if (currentVideo.videoWidth <= 720 && currentVideo.videoHeight <= 540) {
      this.displayError('resolutionError', 2000);
    }
  }

  displayError(arg0: string, arg1: number) {
    throw new Error('Method not implemented.');
  }
}
