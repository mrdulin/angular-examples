import { Injectable } from '@angular/core';

export interface ISidebarNav {
  key: string;
  name: string;
  routerLink: any[];
  children?: ISidebarNav[];
}

@Injectable()
export class NavigationService {
  public navs: ISidebarNav[] = [
    {
      key: 'tag-manager', name: '标签管理', routerLink: ['tag-manager'], children: [
        { key: 'sickness', name: '标准疾病管理', routerLink: ['/tag-manager/sickness'] },
        { key: 'department', name: '标准科室管理', routerLink: ['/tag-manager/department'] },
        { key: 'attribute', name: '属性库管理', routerLink: ['/tag-manager/attribute'] }
      ]
    },
    { key: 'disease-center', name: '专家专科业务', routerLink: ['disease-center'] },
    { key: 'doctor-center', name: '医生中心', routerLink: ['doctor-center'] }
  ]
}
