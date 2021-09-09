import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  BASE_API_URL = 'http://localhost';
  constructor(private http: HttpClient) {}

  private deleteFromAPI(url): any {
    return this.http
      .delete(this.BASE_API_URL + url)
      .pipe(catchError(this.handleError));
  }
  private handleError(err) {
    return of(err);
  }
  deleteVehicle(id: number): any {
    return this.deleteFromAPI('vehicle/' + id);
  }
}
