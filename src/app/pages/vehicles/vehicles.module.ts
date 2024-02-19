import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { ButtonModule } from 'primeng/button';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    VehiclesRoutingModule,
    TableModule,
    DialogModule,
    ProgressBarModule,
    ToastModule,
    MessagesModule,
  ],
  providers: [
    MessageService,
  ]
})
export class VehiclesModule { }
