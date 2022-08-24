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
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = this.store.select("count");
  }
 
  increment() {
    // TODO: Dispatch an increment action
    console.log("increment");
    this.store.dispatch(increment());
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
    console.log("decrement");
    this.store.dispatch(decrement());
  }
 
  reset() {
    // TODO: Dispatch a reset action
    console.log("reset");
    this.store.dispatch(reset());
  }
}