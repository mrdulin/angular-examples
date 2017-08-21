import { Component, ContentChild, QueryList, ContentChildren, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import { MyChildComponent } from './child.component';

/**
 * ContentChild, ContentChildren都是获取组件标签内包含的组件实例
 *
 * @export
 * @class MyParentComponent
 * @implements {AfterContentInit}
 */
@Component({
  selector: 'my-parent',
  template: `
    <p>Parent component</p>
    <ng-content></ng-content>
    <p #childName>{{child.name}}</p>
    <my-child></my-child>
  `
})
export class MyParentComponent implements AfterContentInit {
  //获取单个子组件的实例
  @ContentChild(MyChildComponent)
  child: MyChildComponent;

  //获取多个子组件的实例，类型是QueryList，是一个实现了部分数组迭代方法的类
  @ContentChildren(MyChildComponent)
  childs: QueryList<MyChildComponent>

  @ViewChild(MyChildComponent)
  otherChild: MyChildComponent;

  @ViewChild('childName')
  childNameElement: ElementRef;

  ngAfterContentInit() {
    console.log('childNameElement', this.childNameElement);
    console.log('otherChild', this.otherChild);
    console.log('childs', this.childs);
    this.childs.forEach((child) => console.log(child));
  }

}
