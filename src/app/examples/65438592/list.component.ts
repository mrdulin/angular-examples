import { OnInit, Component } from '@angular/core';

type DeviceColumns = any;

@Component({
  selector: 'app-list',
  template: 'list component',
})
export class ListComponent implements OnInit {
  columnDefs: DeviceColumns[];
  pagination = {
    per_page: 10,
    prev_page: 1,
  };
  defaultColumnDefs: any;
  gridApi: any;
  columnApi: any;

  constructor() {}

  ngOnInit() {
    this.initializeColumns();
  }

  initializeColumns() {
    this.columnDefs = [
      {
        translateKey: 'DEVICES.LIST.SNO',
        width: 100,
        resizable: false,
        sortable: false,
        suppressSizeToFit: true,
        floatingFilter: false,
        valueGetter: (args) => this.getId(args),
        checkboxSelection: (params) => {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: (params) => {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
      },
    ];
  }
  getId(args: any): any {
    console.log(this, args);
    return (
      this.pagination.per_page * this.pagination.prev_page +
      parseInt(args.node.rowIndex, 10) +
      1
    );
  }
}
