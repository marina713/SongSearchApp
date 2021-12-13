import {takeLatest, call, put, Effect} from 'redux-saga/effects';

import {GET_QUOTE} from './constants';
import {updateQuote} from './actions';
import {GetQuoteAction} from './types';
import * as api from './api';

/* GET QUOTE */
export function* getQuoteSaga({
  payload: {onSuccess = () => {}, onError = () => {}},
}: GetQuoteAction): Generator<Effect, any, any> {
  try {
    const response = yield call(api.getQuote, {
      category: 'inspire',
    });
    const result = yield call(() => response.json());

    const quote = result?.contents?.quotes[0].quote;

    if (quote) {
      yield put(updateQuote(quote));
      yield call(onSuccess);
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log(e);
    yield call(onError);
  }
}

export function* watchGetQuote() {
  yield takeLatest(GET_QUOTE, getQuoteSaga);
}
