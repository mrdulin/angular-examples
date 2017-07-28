import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactService } from 'shared/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'detail',
  templateUrl: './detail/detail.component.html',
  styleUrls: ['./detail/detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  contact_id: number;
  detail: any = {};

  constructor(
    private _contactService: ContactService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe((params: Params) => {
      this.contact_id = params.id;
      this.getById(this.contact_id);
    })
  }

  collectTheContact() {
    this.detail.collection == 0 ? this.detail.collection = 1 : this.detail.collection = 0;

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getById(id: number) {
    this._contactService.getContactById(id).subscribe((data: any) => {
      this.detail = data;
    })
  }
}
