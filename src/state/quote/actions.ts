import {action} from 'typesafe-actions';
import {GET_QUOTE, UPDATE_QUOTE} from './constants';
import {GetQuotePayload} from './types';

export const getQuote = (payload: GetQuotePayload) =>
  action(GET_QUOTE, payload);

export const updateQuote = (payload: string) => action(UPDATE_QUOTE, payload);
