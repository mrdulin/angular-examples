import { Component, OnInit, Input } from '@angular/core';

const addImage = require("../images/add.png");

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isShowCreateButton: boolean;

  addImage: string = `url(${addImage})`;

  constructor() {

  }

  ngOnInit() {

  }
}
