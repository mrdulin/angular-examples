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
    { 
      key: 'disease-center', name: '专家专科业务', routerLink: ['disease-center'], children: [
        { key: 'disease-home', name: '聚合页配置', routerLink: ['/disease-center/disease-home'] },
        { key: 'specialist-home', name: '专家专科页配置', routerLink: ['/disease-center/specialist-home'] },
        { key: 'hospital-home', name: '医院配置', routerLink: ['/disease-center/hospital-home'] },
        { key: 'doctor-home', name: '医生配置', routerLink: ['/disease-center/doctor-home'] },
        { key: 'serve-city', name: '服务城市配置', routerLink: ['/disease-center/serve-city'] }
      ]
    },
    { key: 'doctor-center', name: '医生中心', routerLink: ['doctor-center'] },
    { key: 'go-to-hospital', name: '去医院配置', routerLink: ['go-to-hospital'] }
  ]
}
