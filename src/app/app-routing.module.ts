import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () =>
      import('./pages/start/start.module').then((m) => m.StartModule)
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./pages/counter/counter.module').then((m) => m.CounterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
