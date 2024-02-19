import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IVehicle } from './interfaces/vehicle.interface';

export const loadVehiclesList = createAction(
  '[Vehicles] Load Vehicles List',
);

export const loadVehiclesListSuccess = createAction(
  '[Vehicles] Load Vehicles List Success',
  props<{ payload: IVehicle[] }>(),
);

export const loadVehiclesListError = createAction(
  '[Vehicles] Load Vehicles List Error',
  props<{ error: HttpErrorResponse }>()
);

export const loadVehiclesListClear = createAction(
  '[Vehicles] Load Vehicles List Clear'
);
