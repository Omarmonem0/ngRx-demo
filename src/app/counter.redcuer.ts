import { CounterAction } from './counter.actions';

const intialState = {
    counter: 0
};

export class AppState {
    counter: number
}

export function counertReducer (state: AppState = intialState, action: CounterAction){

    switch(action.type){
        case 'increment' :
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'decrement' :
            return {
                ...state,
                counter : state.counter -1
            }
        case 'reset' :
            return {
                ...state,
                counter: 0
            }
        default:
            return state;        
    }
}