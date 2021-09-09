import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgColorDirective {
  private defaultColor: string = 'yellow';

  @Input('bgColor')
  set backgroundColor(color: string) {
    this.setStyle(color);
  };

  constructor(
    private el: ElementRef
  ) {
    this.setStyle(this.defaultColor);
  }

  setStyle(bgColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor || this.defaultColor;
  }
}
