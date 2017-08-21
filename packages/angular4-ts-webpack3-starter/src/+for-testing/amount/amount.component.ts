import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amount',
  templateUrl: './amount.component.html'
})
export class AmountComponent{
  @Input() value: number = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.value++;
    this.valueChange.emit(this.value);
  }

}
