import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `<div [id]="'field-' + id">
    <input [id]="id" />
  </div>`,
})
export class TooltipComponent implements OnInit {
  id = 'name';
  container: any;
  inputField: any;
  ngOnInit() {
    setTimeout(() => {
      this.container = document.querySelector(`#field-${this.id}`);
      this.inputField = document.querySelector(`#${this.id}`);

      this.getState();
    }, 50);
  }

  getState() {
    this.inputField.addEventListener('focus', () => {
      const tooltip = this.container.querySelector('.tooltip');
      const tooltipHeight = tooltip.querySelector('p').clientHeight;

      tooltip.style.height = tooltipHeight + 'px';
    });

    this.inputField.addEventListener('blur', () => {
      const tooltip = this.container.querySelector('.tooltip');

      tooltip.style.height = '0px';
    });
  }
}
