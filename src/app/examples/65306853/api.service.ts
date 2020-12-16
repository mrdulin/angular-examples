import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ApiService {
  deleteVehicle(id) {
    return of('deleteVehicle real implementation');
  }
}
