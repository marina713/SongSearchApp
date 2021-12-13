import {all, fork} from 'redux-saga/effects';

import {watchCount} from './counter/sagas';
import {watchGetQuote} from './quote/sagas';

export const sagas = function* root() {
  yield all([fork(watchCount), fork(watchGetQuote)]);
};
