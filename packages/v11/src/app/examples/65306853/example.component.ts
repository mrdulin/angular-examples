import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({})
export class ExampleComponent {
  selectedVehicle = {
    id: 1,
  };
  constructor(private apiService: ApiService) {}
  navigateToListVehicleComponent() {
    console.log('navigateToListVehicleComponent real implementation');
  }

  deleteVehicle(): void {
    if (confirm('Bent u zeker dat u deze wagen wilt verwijderen?')) {
      this.apiService
        .deleteVehicle(this.selectedVehicle.id)
        .subscribe(() => this.navigateToListVehicleComponent());
    }
  }
}
