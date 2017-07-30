import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './modules/sidebar/sidebar.component.html',
  styleUrls: ['./modules/sidebar/sidebar.component.css']
})
export class SidebarComponent {
  navs: any[] = []
  constructor() {}
}
