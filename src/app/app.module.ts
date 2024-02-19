import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { vehiclesReducer } from './store/vehicles/vehicles.reducers';
import { EffectsModule } from '@ngrx/effects';
import { VehiclesEffects } from './store/vehicles/vehicles.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    StoreModule.forRoot({
      counter: counterReducer,
      vehicles: vehiclesReducer,
    }),
    EffectsModule.forRoot(VehiclesEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
