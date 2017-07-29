import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from 'shared/contact.service';
import { Subscription } from 'rxjs';
import { UtilService } from 'shared/util.service';

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

  isName: boolean = false;
  nameTip: boolean = false;
  isPhoneNum: boolean = false;
  phoneTip: boolean = false;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _contactService: ContactService,
    private _location: Location,
    private _utilService: UtilService
  ) { }

  ngOnInit() {
    this.getContacts();
    this.sub = this._activatedRoute.params.subscribe((params: Params) => {
      this.contactId = params.id;
      this.isAdd = !new Boolean(this.contactId).valueOf();
      this.operateTitle = this.isAdd ? '新建联系人' : '编辑联系人';

      if (!this.isAdd) {
        this.getContactDetailById(this.contactId);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cancelOperate() {
    this._location.back();
  }

  submitForm() {
    if (this.isName && this.isPhoneNum) {
      if (this.isAdd) {
        this.addContact();
      } else {
        this.editContact();
      }
    }
  }

  addContact() { }

  editContact() { }

  onBlurName() {
    this.nameTip = true;
    this.isName = this.contact.name.trim() ? true : false;
  }

  onBlurPhone() {
    this.phoneTip = true;
    this.isPhoneNum = this._utilService.checkPhoneNum(this.contact.telNum);
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
