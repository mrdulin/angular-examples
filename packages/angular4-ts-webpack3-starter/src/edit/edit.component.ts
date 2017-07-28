import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactService } from 'shared/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-operate',
  templateUrl: './edit/edit.component.html',
  styleUrls: ['./edit/edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  contacts: any[] = [];
  contact: any = {};
  contactId: number;
  isAdd: boolean = false;
  operateTitle: string;
  private sub: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _contactService: ContactService
  ) { }

  ngOnInit() {
    this.getContacts();
    this._activatedRoute.params.subscribe((params: Params) => {
      this.contactId = params.id;
      this.isAdd = new Boolean(this.contactId).valueOf();
      this.operateTitle = this.isAdd ? '新建联系人' : '编辑联系人';
      if (!this.isAdd) {
        this.getContactDetailById(this.contactId);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getContacts() {
    this._contactService.getContactsData().subscribe((data: any) => {
      this.contacts = data;
    });
  }

  getContactDetailById(id: number) {
    this._contactService.getContactById(id).subscribe((data: any) => {
      this.contact = data;
    });
  }
}
