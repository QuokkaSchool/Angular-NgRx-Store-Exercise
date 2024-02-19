import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IVehicle } from './interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public loadVehiclesList(): Observable<IVehicle[]> {
    const url = `${this.apiUrl}/vehicles`;

    return this.http.get(url).pipe(
      map((res: any) => res.items as IVehicle[])
    );
  }
}