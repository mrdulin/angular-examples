import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ISidebarNav {
  key: string;
  name: string;
  routerLink: any[] | string;
  children?: ISidebarNav[];
}

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navs: ISidebarNav[] = [
    {
      key: 'tag-manager', name: '标签管理', routerLink: ['/tag-manager'], children: [
        { key: 'sickness', name: '标准疾病管理', routerLink: './sickness' },
        { key: 'department', name: '标准科室管理', routerLink: ['./department'] },
        { key: 'attribute', name: '属性库管理', routerLink: ['./attribute'] }
      ]
    },
    { key: 'disease-center', name: '专家专科业务', routerLink: ['/disease-center'] },
    { key: 'doctor-center', name: '医生中心', routerLink: ['/doctor-center'] }
  ]
  constructor() { }
}
