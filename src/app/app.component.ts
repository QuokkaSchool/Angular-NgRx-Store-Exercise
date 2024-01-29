import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected items: MenuItem[] = [
    {
      label: 'Start',
      routerLink: 'start',
    },
    {
      label: 'Licznik',
      routerLink: 'counter',
    }
  ];
}
