import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Store } from '@ngrx/store';
import {IncrementAction} from '../counter.actions';
import {DecrementAction} from '../counter.actions';
import {ResetAction} from '../counter.actions';
import { AppState, counertReducer } from '../counter.redcuer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  private counter : number;

  constructor(private store: Store<{count: {counter: number}}>) { 
    this.store.select('count').subscribe(state  => {
      this.counter = state.counter;
    })
  }

  ngOnInit() {
  }
  increment() {
    this.store.dispatch(new IncrementAction());

  }
  decrement() {
    this.store.dispatch(new DecrementAction());
  }
  reset() {
    this.store.dispatch(new ResetAction());
  }

}
