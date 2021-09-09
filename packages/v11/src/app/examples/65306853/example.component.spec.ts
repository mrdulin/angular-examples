import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from './api.service';
import { ExampleComponent } from './example.component';

describe('#deleteVehicle', () => {
  let apiService: ApiService;
  let fixture: ComponentFixture<ExampleComponent>;
  let component: ExampleComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ExampleComponent],
        imports: [HttpClientModule],
        providers: [ApiService, HttpClient],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ExampleComponent);
          apiService = TestBed.get(ApiService);
          component = fixture.componentInstance;
          fixture.detectChanges();
        });
    })
  );
  it('should navigate to list vehicle component', () => {
    const confirmSpy = spyOn(window, 'confirm').and.returnValue(true);
    const deleteVehicleSpy = spyOn(apiService, 'deleteVehicle')
      .withArgs(component.selectedVehicle.id)
      .and.returnValue(of('deleteVehicle fake implementation'));

    let navigateSpy = spyOn(
      component,
      'navigateToListVehicleComponent'
    ).and.stub();

    component.deleteVehicle();

    expect(confirmSpy).toHaveBeenCalledOnceWith(
      'Bent u zeker dat u deze wagen wilt verwijderen?'
    );
    expect(deleteVehicleSpy).toHaveBeenCalledOnceWith(1);
    expect(navigateSpy).toHaveBeenCalled();
  });
});
