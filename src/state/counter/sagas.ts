import {put, takeEvery, Effect} from 'redux-saga/effects';

function* getData(): Generator<Effect, any, any> {
  yield put({type: 'ACTION_FROM_SAGA'});
}

export function* watchCount() {
  yield takeEvery('SOME_ACTION', getData);
}
