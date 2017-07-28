import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'call-record',
  templateUrl: './collection/collection.component.html',
  styleUrls: ['./collection/collection.component.css']
})
export class CollectionComponent implements OnInit {
  collections: any[] = [];
  contacts: any = {};

  constructor(
    private _contactService: ContactService
  ) { }

  getCollectionContact() {
    this._contactService.getCollections().subscribe((data: any) => {
      this.collections = data;
    })
  }

  ngOnInit() {
    this.getCollectionContact();
  }
}
