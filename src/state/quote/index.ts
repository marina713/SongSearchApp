import {UPDATE_QUOTE, initialState} from './constants';
import {QuoteState, Action} from './types';

export const quote = (
  state: QuoteState = initialState,
  action: Action,
): QuoteState => {
  switch (action.type) {
    case UPDATE_QUOTE: {
      const {payload} = action;
      return {
        ...state,
        quote: payload,
      };
    }

    default: {
      return state;
    }
  }
};
