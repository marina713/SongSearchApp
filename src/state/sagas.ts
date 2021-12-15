import {all, fork} from 'redux-saga/effects';

import {watchCount} from './counter/sagas';
import {watchGetSongs} from './songs/sagas';

export const sagas = function* root() {
  yield all([fork(watchCount), fork(watchGetSongs)]);
};
