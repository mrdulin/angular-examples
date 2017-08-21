import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * 表达式值为false时渲染模板内容，值为true时将模板内容从DOM树中移除。
 *
 * @export
 * @class UnlessDirective
 */
@Directive({
  selector: '[unless]'
})
export class UnlessDirective{
  @Input('unless')
  set unless(newCondition: boolean) {
    if(!newCondition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  };

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
