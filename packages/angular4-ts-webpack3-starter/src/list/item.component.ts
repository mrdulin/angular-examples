import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// 下面这种方式，在生产环境打包时，由于通过url-loader给每个静态图片资源都加上了hash后缀，但是下面的引用路径和文件名没有改变
// 因此依旧会报404。
// import * as iversonImagePath from '../images/Iverson.jpg';

const iversonImagePath = require('../images/Iverson.jpg');

@Component({
  selector: 'list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() contact: any = {};
  @Output() routerNavigate = new EventEmitter<number>();

  iversonImagePath: string = iversonImagePath;

  constructor() { }
  ngOnInit() {

  }

  goDetail(id: number) {
    this.routerNavigate.emit(id);
  }
}
