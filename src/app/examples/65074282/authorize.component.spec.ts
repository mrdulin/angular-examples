import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthorizeComponent } from './authorize.component';

fdescribe('65074282', () => {
  let component: AuthorizeComponent;
  let fixture: ComponentFixture<AuthorizeComponent>;
  let getUserDetailsSpy;
  beforeEach(() => {
    const authService = jasmine.createSpyObj('AuthService', ['getUserDetails']);
    getUserDetailsSpy = authService.getUserDetails.and.returnValue(
      of('mocked user')
    );

    TestBed.configureTestingModule({
      declarations: [AuthorizeComponent],
      providers: [{ provide: AuthService, useValue: authService }],
    });
  });

  it('should create', () => {
    const logSpy = spyOn(console, 'log');
    fixture = TestBed.createComponent(AuthorizeComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
    expect(getUserDetailsSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('mocked user');
  });
});
