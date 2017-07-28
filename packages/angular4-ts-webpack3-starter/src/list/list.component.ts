import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'shared/contact.service';

@Component({
  selector: 'list',
  templateUrl: './list/list.component.html',
  styleUrls: ['./list/list.component.css']
})
export class ListComponent implements OnInit {
  contacts: any[] = [];

  constructor(
    private _contactService: ContactService
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this._contactService.getContactsData().subscribe((data: any) => {
      this.contacts = data;
    });
  }


}
