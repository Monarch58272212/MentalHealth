import { State, Action } from '../types/types';

export const initialState: State = 0;

export function simpleReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      if (state >= 11) {
        console.log('Maximum na! (11)');
        return state;
      }
      return state + 1;

    case 'DECREMENT':
      if (state <= 0) {
        console.log('Minimum na! (0)');
        return state;
      }
      return state - 1;

    default:
      return state;
  }
}
