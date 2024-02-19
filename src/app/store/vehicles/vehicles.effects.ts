import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VehiclesService } from './vehicles.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { IVehicle } from './interfaces/vehicle.interface';
import * as VehiclesActions from './vehicles.actions';

@Injectable()
export class VehiclesEffects {
  constructor(
    private actions$: Actions,
    private vehiclesService: VehiclesService,
  ) {}

  loadVehiclesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActions.loadVehiclesList),
      switchMap(() =>
        this.vehiclesService.loadVehiclesList().pipe(
          map((res: IVehicle[]) => VehiclesActions.loadVehiclesListSuccess({ payload: res })),
          catchError((err) => of(VehiclesActions.loadVehiclesListError({ error: err })))
        )
      )
  ));
}
