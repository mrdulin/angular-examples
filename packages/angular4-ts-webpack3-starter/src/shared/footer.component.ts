import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'my-footer',
  templateUrl: './shared/footer.component.html',
  styleUrls: ['./shared/footer.component.css']
})
export class FooterComponent {
  private isListPage: boolean = true;

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
    this.isListPage = this._location.path() === '' || this._location.path().indexOf('/list') > -1;
  }
}
