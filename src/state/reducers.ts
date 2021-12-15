import {combineReducers} from 'redux';

import {counter} from './counter';
import {songs} from './songs';

export const combinedReducer = combineReducers({counter, songs});

export type RootState = ReturnType<typeof combinedReducer>;

export const rootReducer = (state: RootState, action: any) => {
  // We can clean up some store on logout action here
  return combinedReducer(state, action);
};
