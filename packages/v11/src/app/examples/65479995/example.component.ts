import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-example',
  template: '<input [ngModel]="myObservable$ |async">',
})
export class ExampleComponent implements OnInit {
  myObservable$: Observable<string>;
  otherProperty: string;
  constructor(private service: ExampleService) {}

  ngOnInit() {
    this.myObservable$ = this.service
      .getThings()
      .pipe(tap((value) => (this.otherProperty = value)));
  }
}
