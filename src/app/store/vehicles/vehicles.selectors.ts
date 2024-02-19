import { IAppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { IVehiclesState } from './vehicles.reducers';

export const selectVehicles = (state: IAppState) => state.vehicles;

export const selectItems = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.items
);

export const selectLoading = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.loading
);

export const selectSuccess = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.success
);

export const selectError = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.error
);
