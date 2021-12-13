import {createSelector} from 'reselect';
import {RootState} from '../reducers';
import {initialState} from './constants';

export const getState = (state: RootState) => state.counter || initialState;

export const getValue = createSelector(
  getState,
  state => state.value || initialState.value,
);
