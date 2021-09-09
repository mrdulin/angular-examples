import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransfersService } from './TransfersService';

export type AppResponseError = any;
type Transfer = any;

@Component({
  selector: 'app-transfer',
})
export class TransferComponent implements OnInit {
  transfers$: Observable<Transfer[] | AppResponseError>;
  constructor(private transfersService: TransfersService) {
    this.transfers$ = this.transfersService.transfers$;
  }

  ngOnInit() {
    this.transfers$.subscribe((data) => {
      console.log(data);
    });
  }
}
