import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ]
})
export class CounterModule { }
