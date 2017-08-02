import { Component, OnInit, ViewChild } from '@angular/core';
import { MdPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { SicknessService } from './sickness.service';

interface IQueryType {
  key: string;
  name: string;
}

interface ITableHeader extends IQueryType {
  cell(row: any): string;
}

@Component({
  selector: 'sickness',
  templateUrl: './sickness.component.html',
  styleUrls: ['./sickness.component.css'],
  providers: [SicknessService]
})
export class SicknessComponent implements OnInit {
  public queryTypes: IQueryType[] = [
    { key: 'diseaseName', name: '疾病名称' },
    { key: 'ICD', name: 'ICD标准码' }
  ];
  public diseaseDataBase: DiseaseDataBase;
  public dataSource: DiseaseDataSource | null;
  public tableHeaders: ITableHeader[] = [
    { key: 'diseaseId', name: '疾病ID', cell: (row: any) => `${row.ID}` },
    { key: 'diseaseName', name: '疾病名称', cell: (row: any) => `${row.Title}` },
    { key: 'ICD', name: 'ICD标准码', cell: (row: any) => `${row.SubTitle}` },
    { key: 'IDC', name: 'IDC附加码', cell: (row: any) => `${row.Image}` },
    { key: 'diseaseCategory', name: '所属疾病类目', cell: (row: any) => `类目` },
    { key: 'department', name: '所属标准科室', cell: (row: any) => `科室` },
    { key: 'operator', name: '操作', cell: (row: any) => `操作` }
  ];
  public selectedQueryType: IQueryType;
  public keyword: string;
  public displayedColumns: string[] = [];

  @ViewChild(MdPaginator)
  public paginator: MdPaginator;

  constructor(
    private _sicknessService: SicknessService
  ) { }

  public ngOnInit() {
    this.selectedQueryType = this.queryTypes[0];
    this.displayedColumns = this.tableHeaders.map((header: ITableHeader) => header.key);
    this.diseaseDataBase = new DiseaseDataBase(this._sicknessService);
    this.dataSource = new DiseaseDataSource(this.diseaseDataBase);
  }

  public onSubmit(): void {
    console.log(this.selectedQueryType, this.keyword);
  }
}

export class DiseaseDataBase {

  constructor(
    private _sicknessService: SicknessService
  ) {
    this.getDiseasesByPage();
  }

  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getData(): any[] {
    return this.dataChange.value;
  }

  getDiseasesByPage() {
    return this._sicknessService.getDiseasesByPage('java', 1).subscribe(data => {
      this.dataChange.next(data.Books);
    });
  }
}

export class DiseaseDataSource extends DataSource<any>{
  constructor(
    private _diseaseDataBase: DiseaseDataBase
  ) {
    super();
  }

  connect(): Observable<any> {
    return this._diseaseDataBase.dataChange.asObservable().map(() => {
      const data = this._diseaseDataBase.getData();
      return data;
    });
  }

  disconnect() { }
}
