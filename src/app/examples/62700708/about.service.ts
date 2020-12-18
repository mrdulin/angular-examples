import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private http: HttpClient) {}

  getAboutInfo() {
    return this.http.get('/assets/aboutInfo.txt', { responseType: 'text' });
  }
}
