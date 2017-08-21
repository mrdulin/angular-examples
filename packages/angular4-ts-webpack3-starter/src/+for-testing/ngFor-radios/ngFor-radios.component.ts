import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngFor-radios',
  templateUrl: './ngFor-radios.component.html'
})
export class NgForRadiosComponent {
  radioOpts: any[] = [
    { key: 'shanghai', name: '上海' },
    { key: 'beijing', name: '北京' },
    { key: 'shenzhen', name: '深圳' }
  ];

  radioOptSelected: any;
  radioOptSelectedV2: any;

  ngOnInit() {
    this.radioOptSelected = this.radioOpts[0];
  }

  onForm1Submit() {
    console.log('radioOptSelected', this.radioOptSelected);
  }

  onForm2Submit() {
    console.log('radioOptSelectedV2', this.radioOptSelectedV2);
  }

  onRadioSelect(opt: any) {
    this.radioOptSelectedV2 = Object.assign({}, opt);
  }
}
