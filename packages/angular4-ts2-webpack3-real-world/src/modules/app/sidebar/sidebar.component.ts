import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navs: any[] = [
    { key: 'tag-manager', name: '标签管理', routerLink: ['/tag-manager'] },
    { key: 'disease-center', name: '专家专科业务', routerLink: ['/disease-center'] },
    { key: 'doctor-center', name: '医生中心', routerLink: ['/doctor-center'] }
  ]
  constructor() { }
}
