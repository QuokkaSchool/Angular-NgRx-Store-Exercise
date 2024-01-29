import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VehicleInterface, VEHICLES_DATA } from './utils/vehicles-data';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  protected vehicles$: Observable<VehicleInterface[]> = of(VEHICLES_DATA);
  protected isDialogVisible: boolean = false;

  protected addVehicle(): void {
    this.isDialogVisible = true;
  }
}
