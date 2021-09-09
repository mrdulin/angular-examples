import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'for-testing',
  templateUrl: './for-testing.component.html'
})
export class ForTestingComponent implements OnInit{

  //安全导航操作符
  a = {};

  //双向绑定原理
  number1: number = 0;
  number2: number = 1;

  //属性型指令测试
  colorSelected: string;
  colors: string[] = ['lightgreen', 'red'];

  //结构性指令测试
  condition: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.a = {
        b: {
          c: {
            d: 'angular4'
          }
        }
      };
    }, 2000);
  }

  onValueChange(num: number) {
    this.number2 = num;
  }

}
