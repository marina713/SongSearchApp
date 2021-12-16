import { call, Effect } from 'redux-saga/effects';

import { API_ENDPOINT } from '~/constants';

import { GetSongsApiPayload } from './types';

export function* getSongs({
  term = '',
}: GetSongsApiPayload): Generator<Effect, any, any> {
  return yield call(fetch, `${API_ENDPOINT}?term=${term}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
