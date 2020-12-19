import { TestBed } from '@angular/core/testing';
import {
  AnimationStateService,
  AnimationStatus,
} from './animation-state.service';
import { AnimationService } from './animation.service';

describe('53333050', () => {
  let animationStateService: AnimationStateService;
  let animationService: AnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimationService, AnimationStateService],
    });

    animationStateService = TestBed.get(AnimationStateService);
    animationService = TestBed.get(AnimationService);
  });

  it('should call changeStatus if status is AnimationStatus.Stopped', () => {
    // Arrange
    const statusGetterSpy = spyOnProperty(
      animationStateService,
      'status',
      'get'
    ).and.returnValue(AnimationStatus.Stopped);

    // Act
    const actual = animationService.start();
    expect(actual).toEqual(AnimationStatus.Stopped);

    // Assert
    expect(statusGetterSpy).toHaveBeenCalled();
  });
});
