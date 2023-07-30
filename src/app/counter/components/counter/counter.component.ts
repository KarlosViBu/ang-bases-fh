import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button class= "btn-1"
    (click)="increaseBy(+1)">+1</button>
    <button class= "btn-2"
    (click)="resetCounter()">Reset</button>
    <button class="btn-1"
    (click)="increaseBy(-1)">-1</button>

  `
})
export class CounterComponent  {
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
