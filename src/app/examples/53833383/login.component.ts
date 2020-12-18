import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

const Errorcode = {
  FIREBASE_POPUP_CLOSED: 'auth/popup-closed-by-user',
  FIREBASE_REQUEST_EXESS: 'auth/request',
};

@Component({})
export class LoginComponent implements OnInit {
  public loginError: string | boolean = false;

  constructor(public authService: AuthService) {}
  ngOnInit() {}
  public signInWithGithub(): void {
    this.authService
      .loginwithGithubProvider()
      .then((res) => {
        this.loginError = null;
      })
      .catch((err) => {
        if (err === Errorcode.FIREBASE_POPUP_CLOSED) {
          this.loginError = 'The popup has been closed before authentication';
        }
        if (err === Errorcode.FIREBASE_REQUEST_EXESS) {
          this.loginError = 'To many requests to the server';
        }
      });
  }
}
