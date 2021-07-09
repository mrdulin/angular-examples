import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { EmitterService } from './emitter.service';
import { MainPageComponent } from './main-page.component';

fdescribe('MainpageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers: [EmitterService],
    }).compileComponents();
  });

  it('should emit false via createCustomer$ from breadCrumbService', inject(
    [EmitterService],
    (service: EmitterService) => {
      spyOn(service.helpDisplayEmitter, 'emit');
      fixture = TestBed.createComponent(MainPageComponent);
      component = fixture.componentInstance;
      component.getHelpDisplay('helpItem');
      expect(service.helpDisplayEmitter.emit).toHaveBeenCalledWith('helpItem');
    }
  ));
});
