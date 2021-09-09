import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ExampleComponent } from './example.component';

describe('65356063', () => {
  let fixture: ComponentFixture<ExampleComponent>;
  let component: ExampleComponent;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ExampleComponent],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ExampleComponent);
          component = fixture.componentInstance;
        });
    })
  );

  it('should select a png file', () => {
    const ev = {
      prevented: false,
      files: [
        {
          uid: '01',
          name: 'filename',
          extension: '.png',
          size: 123000,
          rawFile: 'test raw file',
        },
      ],
    };

    const mockReader = {
      addEventListener: jasmine.createSpy().and.callFake((event, listener) => {
        listener();
      }),
      readAsDataURL: jasmine.createSpy(),
    };
    spyOn(window, 'FileReader').and.returnValue(
      (mockReader as unknown) as FileReader
    );

    component.onSelect(ev);

    expect(component.addedfiles.length).toEqual(1);
    expect(mockReader.addEventListener).toHaveBeenCalledOnceWith(
      'loadend',
      jasmine.any(Function)
    );
    expect(mockReader.readAsDataURL).toHaveBeenCalledOnceWith('test raw file');
  });
});
