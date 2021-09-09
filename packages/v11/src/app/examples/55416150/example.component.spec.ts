import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VideoComponent } from './example.component';

describe('55416150', () => {
  let fixture: ComponentFixture<VideoComponent>;
  let component: VideoComponent;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [VideoComponent],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(VideoComponent);
          component = fixture.componentInstance;
        });
    })
  );
  it('should display error', () => {
    const evt = {
      target: {
        videoWidth: 400,
        videoHeight: 300,
      },
    };
    const displayErrorStub = spyOn(component, 'displayError').and.stub();
    component.videoResolutionTest((evt as unknown) as KeyboardEvent);
    expect(displayErrorStub).toHaveBeenCalledWith('resolutionError', 2000);
  });

  it('should do nothing', () => {
    const evt = {
      target: {
        videoWidth: 1024,
        videoHeight: 768,
      },
    };
    const displayErrorStub = spyOn(component, 'displayError').and.stub();
    component.videoResolutionTest((evt as unknown) as KeyboardEvent);
    expect(displayErrorStub).not.toHaveBeenCalled();
  });
});
