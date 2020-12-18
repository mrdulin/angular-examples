import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Service {
  private subject = new Subject<{ message: string }>();

  getSubject() {
    return this.subject;
  }

  setSubject(value: string) {
    this.subject.next({ message: value });
  }
}
