import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ArticleService {
  constructor() {}
  getEvents() {
    return of(['real data']);
  }
}
