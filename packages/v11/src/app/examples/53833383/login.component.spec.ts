import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

describe('53833383', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  beforeEach(
    waitForAsync(() => {
      service = jasmine.createSpyObj('AuthService', [
        'loginwithGithubProvider',
      ]);

      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [AuthService],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(LoginComponent);
          component = fixture.componentInstance;
          service = TestBed.inject(AuthService);
        });
    })
  );

  it('Login should display error', fakeAsync(() => {
    spyOn(service, 'loginwithGithubProvider').and.returnValue(
      Promise.reject('auth/popup-closed-by-user')
    );
    component.signInWithGithub();
    tick();
    expect(component.loginError).toBe(
      'The popup has been closed before authentication'
    );
  }));
});
