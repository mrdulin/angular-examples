import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const CONTACT_URL = './contacts.json';

@Injectable()
export class ContactService {
  constructor(
    private http: Http
  ) { }

  request(url: string, opts: any) {
    return this.http.request(url, new RequestOptions(opts))
      .map((res) => {
        let _res = res.json();

        if (opts.collection) {
          let temp: any = [];
          for (let i = 0; i < _res.length; i++) {
            if (_res[i].collection == opts.collection) {
              temp.push(_res[i]);
            }
          }
          _res = temp;
        }

        return _res;
      })
  }

  get(url: string, opts?: Object) {
    return this.request(url, Object.assign({ method: 'get' }, opts));
  }

  getContactsData() {
    return this.get(CONTACT_URL);
  }

  getContactById() {

  }

  getCollections() {
    return this.get(CONTACT_URL, { collection: 1 });
  }

  addContact() {

  }
}
