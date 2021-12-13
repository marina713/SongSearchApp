import {SET_COUNTER, initialState} from './constants';
import {CounterState, Action} from './types';

export const counter = (
  state: CounterState = initialState,
  action: Action,
): CounterState => {
  switch (action.type) {
    case SET_COUNTER: {
      const {payload} = action;
      return {
        ...state,
        value: state.value + payload,
      };
    }

    default: {
      return state;
    }
  }
};
