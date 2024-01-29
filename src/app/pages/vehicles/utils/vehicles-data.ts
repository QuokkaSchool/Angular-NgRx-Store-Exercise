import { v4 as uuidv4 } from 'uuid';

export enum VehicleType {
  truck = 'Ciężarówka',
  van = 'Furgonetka',
}

export enum VehicleStatus {
  available = 'Dostępny',
  inUse = 'W użytku',
  underMaintenance = 'W trakcie konserwacji'
}

export interface VehicleInterface {
  id: string;
  brand: string;
  model: string;
  year: number;
  registrationNumber: string;
  type: VehicleType;
  status: VehicleStatus;
}

export const VEHICLES_DATA: VehicleInterface[] = [
  {
    id: uuidv4(),
    brand: 'Peugeot',
    model: 'Boxer',
    year: 2022,
    registrationNumber: 'ABC123',
    type: VehicleType.truck,
    status: VehicleStatus.available,
  },
  {
    id: uuidv4(),
    brand: 'Fiat',
    model: 'Ducato',
    year: 2021,
    registrationNumber: 'DEF456',
    type: VehicleType.van,
    status: VehicleStatus.inUse,
  },
  {
    id: uuidv4(),
    brand: 'Ford',
    model: 'Transit',
    year: 2020,
    registrationNumber: 'GHI789',
    type: VehicleType.van,
    status: VehicleStatus.available,
  },
  {
    id: uuidv4(),
    brand: 'Renault',
    model: 'Master',
    year: 2023,
    registrationNumber: 'JKL012',
    type: VehicleType.truck,
    status: VehicleStatus.underMaintenance,
  },
  {
    id: uuidv4(),
    brand: 'Mercedes-Benz',
    model: 'Sprinter',
    year: 2019,
    registrationNumber: 'MNO345',
    type: VehicleType.van,
    status: VehicleStatus.available,
  },
  {
    id: uuidv4(),
    brand: 'DAF',
    model: 'XF480 FT',
    year: 2018,
    registrationNumber: 'PQR678',
    type: VehicleType.truck,
    status: VehicleStatus.available,
  },
  {
    id: uuidv4(),
    brand: 'Scania',
    model: 'R450',
    year: 2021,
    registrationNumber: 'STU901',
    type: VehicleType.van,
    status: VehicleStatus.available,
  },
  {
    id: uuidv4(),
    brand: 'MAN',
    model: 'TGX',
    year: 2018,
    registrationNumber: 'VWX234',
    type: VehicleType.truck,
    status: VehicleStatus.inUse,
  },
  {
    id: uuidv4(),
    brand: 'Renault',
    model: 'T480',
    year: 2019,
    registrationNumber: 'YZA567',
    type: VehicleType.van,
    status: VehicleStatus.available,
  },
  {
    id: uuidv4(),
    brand: 'Volvo',
    model: 'FH540',
    year: 2022,
    registrationNumber: 'BCD890',
    type: VehicleType.truck,
    status: VehicleStatus.available,
  },
];
