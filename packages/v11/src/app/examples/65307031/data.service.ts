import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Filter = any;

@Injectable()
export class DataService {
  constructor(private httpc: HttpClient) {}
  setParams(dataparams: Filter) {
    return dataparams;
  }
  getDataCount(dataparams: Filter): Observable<number> {
    const url = 'http://blablabla.com';
    const params = this.setParams(dataparams);
    return new Observable<number>((observer) => {
      this.httpc
        .get<number>(url, { params })
        .subscribe((data) => {
          console.log(data);
          observer.next(data);
          observer.complete();
        });
    });
  }
}
