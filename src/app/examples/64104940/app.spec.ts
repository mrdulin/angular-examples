import { collectLotameData } from './app';

describe('collectLotameData', () => {
  it('should pass', () => {
    const cmdSpy = jasmine.createSpyObj('cmd', ['push']);
    let fnRef;
    cmdSpy.push.and.callFake((fn) => {
      fnRef = fn;
    });
    const collectSpy = jasmine.createSpy();

    window.lotame_123 = {
      cmd: cmdSpy,
      collect: collectSpy,
    };
    collectLotameData('best singer', 'teresa teng');
    expect(cmdSpy.push).toHaveBeenCalledWith(jasmine.any(Function));
    fnRef();
    expect(collectSpy).toHaveBeenCalledWith({
      behaviors: {
        act: [`tracking : best singer : teresa teng`],
      },
    });
  });
});
