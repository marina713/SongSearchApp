import {action} from 'typesafe-actions';
import {SET_COUNTER} from './constants';

export const setCounter = (payload: number) => action(SET_COUNTER, payload);
