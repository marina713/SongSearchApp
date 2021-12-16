import {all, fork} from 'redux-saga/effects';

import {watchGetSongs} from './songs/sagas';

export const sagas = function* root() {
  yield all([fork(watchGetSongs)]);
};
