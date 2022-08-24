import { increment, decrement, reset } from './counter.actions';
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";


@Component({
  selector: "app-counter",
  styleUrls: ["./counter.component.css"],
  templateUrl: "./counter.component.html",
})
export class CounterComponent {
  count$: Observable<number> = of(0);
  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select("count");
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}