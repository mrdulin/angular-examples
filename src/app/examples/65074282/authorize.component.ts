import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({})
export class AuthorizeComponent {
  constructor(private authService: AuthService) {
    this.authService
      .getUserDetails(localStorage.getItem('jwt_token'))
      .subscribe((v) => {
        //--my code--
        console.log(v);
      });
  }
}
