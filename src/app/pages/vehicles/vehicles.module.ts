import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { ButtonModule } from 'primeng/button';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    VehiclesRoutingModule,
    TableModule,
    DialogModule
  ]
})
export class VehiclesModule { }
