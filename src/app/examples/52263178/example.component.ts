import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Service } from './example.service';

@Component({})
export class Component2 implements OnInit {
  textFromComponent1: string;
  subscription: Subscription;

  constructor(public service: Service) {}
  ngOnInit() {
    console.log('ngOnInit');
    this.subscription = this.service.getSubject().subscribe((data) => {
      console.log(data);
      this.textFromComponent1 = data.message;
    });
  }
}
