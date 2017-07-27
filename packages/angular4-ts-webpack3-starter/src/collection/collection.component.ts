import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'call-record',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collections: any[] = [];
  contactsL: any = {};

  constructor(
    private _contactService: ContactService
  ) { }

  getCollectionContact() {

  }

  ngOnInit() {
    this.getCollectionContact();
  }
}
