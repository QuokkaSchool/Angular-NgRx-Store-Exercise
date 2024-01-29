import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterFacade } from '../../store/counter/counter.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  protected counter$: Observable<number> = this.counterFacade.counter$;

  constructor(private counterFacade: CounterFacade) {}

  protected increment(): void {
    this.counterFacade.increment();
  }

  protected decrement(): void {
    this.counterFacade.decrement();
  }
}
