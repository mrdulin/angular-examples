import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { OndemandComponent } from './ondemand.component';
import { SocketService } from './socket.service';

describe('65302152', () => {
  let fixture: ComponentFixture<OndemandComponent>;
  let component: OndemandComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OndemandComponent],
      providers: [SocketService],
    }).compileComponents();
    fixture = TestBed.createComponent(OndemandComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check socket service', inject(
    [SocketService],
    (socketioService: SocketService) => {
      const connectorSpy = jasmine.createSpyObj('connector', ['on']);
      connectorSpy.on.and.callFake((event, listener) => {
        listener('fake message');
      });
      const getSocketIOConnectorSpy = spyOn(
        socketioService,
        'getSocketIOConnector'
      ).and.returnValue(connectorSpy);

      // trigger ngOnInit of component
      fixture.detectChanges();

      expect(getSocketIOConnectorSpy).toHaveBeenCalledOnceWith('real product');
      expect(connectorSpy.on).toHaveBeenCalledOnceWith(
        'connected',
        jasmine.any(Function)
      );
    }
  ));
});
