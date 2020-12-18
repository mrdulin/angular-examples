import { Component } from '@angular/core';

type FileRestrictions = any;
type FileInfo = any;

@Component({})
export class ExampleComponent {
  addedfiles: Array<any> = [];
  fileRestrictions: FileRestrictions = {
    allowedExtensions: ['.jpg', '.png', '.jpeg', '.doc', '.docx', '.pdf'],
    maxFileSize: 5000000,
  };
  public onSelect(ev: any): void {
    ev.files.forEach((file: FileInfo) => {
      if (file.rawFile) {
        const reader = new FileReader();
        if (
          this.fileRestrictions.allowedExtensions.includes(
            file.extension.toLowerCase()
          )
        ) {
          console.log(reader);
          reader.addEventListener('loadend', () => {
            this.addedfiles.push({ ...file, src: reader.result as string });
          });
          reader.readAsDataURL(file.rawFile);
          console.log(this.addedfiles);
        }
      }
    });
  }
}
