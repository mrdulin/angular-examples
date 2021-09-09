import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  getUserDetails(token) {
    let userDetails = atob(token);
    return of(userDetails);
  }
}
