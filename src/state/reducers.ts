import {combineReducers} from 'redux';

import {counter} from './counter';
import {quote} from './quote';

export const combinedReducer = combineReducers({counter, quote});

export type RootState = ReturnType<typeof combinedReducer>;

export const rootReducer = (state: RootState, action: any) => {
  // We can clean up some store on logout action here
  return combinedReducer(state, action);
};
