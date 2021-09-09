import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() hamburgerToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  hamburgerClicked(): void {
    this.hamburgerToggle.emit();
  }
}
