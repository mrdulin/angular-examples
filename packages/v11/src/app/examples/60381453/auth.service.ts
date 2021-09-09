import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

type Credentials = any;

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  login(credentials: Credentials): Observable<any> {
    const loginUrl = 'http://localhost:3000/login';
    return this.http.post(loginUrl, credentials).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        let error = new Error('' + httpErrorResponse.status);
        if (httpErrorResponse.headers.get('customHeaderName')) {
          error.message = 'Appropriate Response';
        }
        return throwError(error);
      })
    );
  }
}
