export enum VehicleType {
  truck = 'Truck',
  van = 'Van',
}

export enum VehicleStatus {
  available = 'Available',
  inUse = 'In use',
  underMaintenance = 'Under Maintenance'
}

export interface IVehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  registrationNumber: string;
  type: VehicleType,
  status: VehicleStatus,
  driverId: string;
}
