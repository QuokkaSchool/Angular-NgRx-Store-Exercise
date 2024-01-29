import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  protected counter$: Observable<number> = of(0);

  protected increment(): void {

  }

  protected decrement(): void {

  }
}
