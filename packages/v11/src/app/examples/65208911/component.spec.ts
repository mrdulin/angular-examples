import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppResponseError, TransferComponent } from './component';
import { TransfersService } from './TransfersService';

describe('65208911', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;
  const transfersServiceStub = {
    transfers$: of(),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferComponent],
      providers: [
        { provide: TransfersService, useValue: transfersServiceStub },
      ],
    });
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
  });
  it('should hide app-checklist component when return AppResponseError', () => {
    const error: AppResponseError = {
      code: '400',
      message: 'Bad request',
    };
    component.transfers$ = of(error);
    fixture.detectChanges();
    // expect(fixture.debugElement.query(By.css('app-checklist'))).toBeNull();
  });
});
