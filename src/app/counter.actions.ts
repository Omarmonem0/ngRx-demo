import { Action } from '@ngrx/store';


export class IncrementAction  implements Action{
    readonly type = 'increment';
}
export class DecrementAction implements Action{
    readonly type = 'decrement';
}
export class ResetAction implements Action {
    readonly type = 'reset';
}

export type CounterAction = ResetAction | IncrementAction | DecrementAction;