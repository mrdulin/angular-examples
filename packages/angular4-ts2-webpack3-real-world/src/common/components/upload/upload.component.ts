import { Component, Input } from '@angular/core';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class uploadComponent{
  @Input() beforeUpload: Function
  @Input() text?: string

  handleClick($inputEl: any): void {
    $inputEl.click()
  }

  handleOnChange($inputEl: any): void {
    this.beforeUpload($inputEl)
  }

  handleDelete($inputEl: any): void {
    $inputEl.value = null
    this.handleOnChange($inputEl)
  }
}
