import { Component } from '@angular/core';

@Component({
  selector: 'entrance-manager',
  templateUrl: './entranceManager.component.html',
  styleUrls: ['./entranceManager.component.css']
})
export class entranceManagerComponent{
  handleIconBeforeUpload(file: any): void {
    console.log(file.value)
  }

  handleBannerBeforeUpload(file: any): void {
    console.log(file.value)
  }
}
