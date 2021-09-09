import { TestBed } from '@angular/core/testing';
import { CloseConnectionHandlerService } from './closeConnectionHandler.service';
import { SignalRService } from './signalR.service';

describe('CloseConnectionHandlerService', () => {
  let service: CloseConnectionHandlerService;
  let signalRServiceSpy: jasmine.SpyObj<SignalRService>;

  beforeEach(() => {
    signalRServiceSpy = {
      ...jasmine.createSpyObj('SignalRService', ['']),
    } as jasmine.SpyObj<SignalRService>;

    TestBed.configureTestingModule({
      providers: [{ provide: SignalRService, useValue: signalRServiceSpy }],
    });

    service = TestBed.inject(CloseConnectionHandlerService);
  });

  describe('#initialize', () => {
    it('should log error to the console', () => {
      // Arrange
      spyOn(console, 'error');

      const hubConnectionStartSpy = jasmine.createSpyObj('HubConnection', [
        'onclose',
      ]);
      hubConnectionStartSpy.onclose.and.callFake((callback) =>
        callback('Error!')
      );
      signalRServiceSpy.hubConnection = hubConnectionStartSpy;

      // Act
      service.initialize();

      // Assert
      expect(console.error).toHaveBeenCalled();
    });
  });
});
