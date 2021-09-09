import { TestBed } from '@angular/core/testing';
import { DataService, Filter } from './data.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('MyDataService', () => {
  let dataService: DataService;
  let mockParams: Filter;
  let mockCount: number;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    dataService = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get data', async () => {
    mockParams = { name: 'Test', id: 3 };
    mockCount = 358;

    const promise = dataService.getDataCount(mockParams).toPromise();
    const req = httpTestingController.expectOne(
      'http://blablabla.com?name=Test&id=3'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockCount);
    const actual = await promise;
    expect(actual).toBe(358);
    httpTestingController.verify();
  });
});
