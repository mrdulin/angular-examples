import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('60381453', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should catch error with custom header', () => {
    const credentials = { password: '123', email: 'teresa.teng@example.com' };
    const apiUrl = 'http://localhost:3000/login';
    authService.login(credentials).subscribe({
      next: null,
      error: (error: Error) => {
        expect(error.message).toEqual('Appropriate Response');
      },
    });

    httpMock.expectOne({ url: apiUrl, method: 'POST' }).flush([], {
      status: 403,
      statusText: 'Forbidden',
      headers: { customHeaderName: 'customHeaderValue' },
    });
  });
});
