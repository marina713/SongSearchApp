import { takeLatest, call, put, Effect } from 'redux-saga/effects';

import { GET_SONGS } from './constants';
import { updateSongs } from './actions';
import { GetSongsAction, Song } from './types';
import * as api from './api';

/* GET SONGS */
export function* getSongsSaga({
  payload: { onSuccess = () => {}, onError = () => {}, term },
}: GetSongsAction): Generator<Effect, any, any> {
  try {
    const response = yield call(api.getSongs, { term });
    const result = yield call(() => response.json());

    const songs = result.results?.filter(
      (result: Song) => !!result.trackId && !!result.trackTimeMillis,
    );

    if (songs && Array.isArray(songs)) {
      yield put(updateSongs(songs));
      yield call(onSuccess);
    } else {
      throw new Error();
    }
  } catch (e) {
    yield call(onError);
  }
}

export function* watchGetSongs() {
  yield takeLatest(GET_SONGS, getSongsSaga);
}
