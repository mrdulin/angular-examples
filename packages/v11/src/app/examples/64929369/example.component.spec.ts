import { ExampleComponent } from './example.component';

describe('64929369', () => {
  it('should call setData from RPage', () => {
    const component = new ExampleComponent();
    //@ts-ignore
    const setDataSpy = spyOn(component, 'setData');
    //@ts-ignore
    const setPageSpy = spyOn(component, 'setPage');
    component.rPage();
    expect(setDataSpy).toHaveBeenCalled();
    expect(setPageSpy).toHaveBeenCalled();
  });
});
