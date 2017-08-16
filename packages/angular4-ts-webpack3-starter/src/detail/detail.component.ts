import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactService } from 'shared/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  contact_id: number;
  detail: any = {};

  images = {
    collect: `url(${require('../images/collect.png')})`,
    collected: `url(${require('../images/collected.png')})`,
    iverson: require('../images/Iverson.jpg')
  }

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
    //TODO:
  }

  editContact() {
    this._router.navigate(['/edit', this.contact_id]);
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
