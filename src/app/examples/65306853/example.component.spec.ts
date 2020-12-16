import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from './api.service';
import { ExampleComponent } from './example.component';

describe('#deleteVehicle', () => {
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let fixture: ComponentFixture<ExampleComponent>;
  let component: ExampleComponent;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['deleteVehicle']);
    apiServiceSpy.deleteVehicle.and.returnValue(
      of('deleteVehicle fake implementation')
    );

    TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
  });
  it('should navigate to list vehicle component', () => {
    const confirmSpy = spyOn(window, 'confirm').and.returnValue(true);
    let navigateSpy = spyOn(
      component,
      'navigateToListVehicleComponent'
    ).and.callThrough();

    component.deleteVehicle();

    expect(confirmSpy).toHaveBeenCalledOnceWith(
      'Bent u zeker dat u deze wagen wilt verwijderen?'
    );
    expect(apiServiceSpy.deleteVehicle).toHaveBeenCalledOnceWith(1);
    expect(navigateSpy).toHaveBeenCalled();
  });
});
