import { Component } from '@angular/core';

window['TIME_OUT'] = 1000;

@Component({})
export class ExampleComponent {
  isCMode = false;
  quest = {
    isCompleted: false,
    isTimeCompleted: false,
  };
  public setOption() {
    setTimeout(() => {
      if (this.isCMode && !this.quest['isCompleted']) {
        this.toggleOption(false);
      }
    }, window['TIME_OUT']);
  }
  toggleOption(flag) {}
}
