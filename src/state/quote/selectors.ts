import {createSelector} from 'reselect';
import {RootState} from '../reducers';
import {initialState} from './constants';

export const getState = (state: RootState) => state.quote || initialState;

export const getQuote = createSelector(
  getState,
  state => state.quote || initialState.quote,
);
