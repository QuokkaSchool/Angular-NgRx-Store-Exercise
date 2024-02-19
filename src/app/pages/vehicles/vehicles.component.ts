import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { VehicleInterface, VEHICLES_DATA } from './utils/vehicles-data';
import { VehiclesFacade } from '../../store/vehicles/vehicles.facade';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();

  protected vehicles$: Observable<VehicleInterface[]> = this.vehiclesFacade.items$;
  protected loading$: Observable<boolean> = this.vehiclesFacade.loading$;
  protected success$: Observable<boolean> = this.vehiclesFacade.success$;
  protected error$: Observable<HttpErrorResponse | null> = this.vehiclesFacade.error$;

  protected isDialogVisible: boolean = false;

  constructor(
    private vehiclesFacade: VehiclesFacade,
    private messageService: MessageService,
  ) {}

  public ngOnInit(): void {
    this.vehiclesFacade.loadVehiclesList();

    this.success$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((success) => {
        if (!success) return;
        this.messageService.add({
          severity: 'success',
          summary: 'Sukces',
          detail: 'Załadowano listę pojazdów'
        });
      });

    this.error$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((error) => {
        if (!error) return;
        this.messageService.add({
          severity: 'error',
          summary: 'Błąd',
          detail: error.error.message
        })
      })
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();

    this.vehiclesFacade.clearVehiclesList();
  }

  protected addVehicle(): void {
    this.isDialogVisible = true;
  }
}
