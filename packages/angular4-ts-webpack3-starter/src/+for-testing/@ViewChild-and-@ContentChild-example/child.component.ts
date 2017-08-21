import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
    <p>Child component</p>
  `
})
export class MyChildComponent{
  name: string = 'child name';
}
