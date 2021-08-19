import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TooltipComponent } from './tooltip.component';

describe('65212730', () => {
  it('should pass', fakeAsync(() => {
    const fixture = TestBed.createComponent(TooltipComponent);
    const componentInst = fixture.componentInstance;
    componentInst.id = 'fieldId';
    const getStateStub = spyOn(componentInst, 'getState').and.stub();

    fixture.detectChanges();
    tick(50);

    fixture.whenStable().then(() => {
      expect(componentInst.container.nodeName).toBe('DIV');
      expect(componentInst.inputField.nodeName).toBe('INPUT');
      expect(getStateStub).toHaveBeenCalledTimes(1);
    });
  }));
});
