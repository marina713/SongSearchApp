import {call, Effect} from 'redux-saga/effects';

import {API_ENDPOINT} from '~/constants';

import {GetQuoteApiPayload} from './types';

export function* getQuote({
  category = 'inspire',
}: GetQuoteApiPayload): Generator<Effect, any, any> {
  return yield call(fetch, `${API_ENDPOINT}?category=${category}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
