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
    private _contactService: ContactService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    const ss_contacts = sessionStorage.getItem('contacts');
    if (!ss_contacts) {
      this._contactService.getContactsData().subscribe((data: any) => {
        this.contacts = data;
        sessionStorage.setItem('contacts', JSON.stringify(data));
      });
    } else {
      this.contacts = JSON.parse(ss_contacts);
    }
  }


  routerNavigate(id: number) {
    this._router.navigate(['/list', id]);
  }
}
