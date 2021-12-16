import { runSaga } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { watchGetSongs, getSongsSaga } from '../sagas';
import { GET_SONGS } from '../constants';
import { updateSongs } from '../actions';
import * as api from '../api';

describe('watchGetSongs', () => {
  const genObject = watchGetSongs();

  it('should wait for every GET_SONGS action and call getSongsSaga', () => {
    expect(genObject.next().value).toEqual(takeLatest(GET_SONGS, getSongsSaga));
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

const getMockAction = (payload: any) => ({
  payload,
  type: 'MOCK_ACTION',
});

const mockOnSuccess = jest.fn();
const mockOnError = jest.fn();

describe('getSongsSaga', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call api and dispatch success action', async () => {
    // @ts-ignore
    const requestSongs = jest.spyOn(api, 'getSongs').mockImplementation(() =>
      Promise.resolve({
        json: () => ({
          results: [],
        }),
      }),
    );
    const dispatched: Array<string> = [];
    await runSaga(
      {
        dispatch: (action: any) => dispatched.push(action),
      },
      getSongsSaga,
      getMockAction({
        onSuccess: mockOnSuccess,
        onError: mockOnError,
        term: 'Sun',
      }),
    );

    expect(requestSongs).toHaveBeenCalledTimes(1);
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockOnError).toHaveBeenCalledTimes(0);
    expect(dispatched).toEqual([updateSongs([])]);
    requestSongs.mockClear();
  });

  it('should call api and call error callback', async () => {
    // @ts-ignore
    const requestSongs = jest.spyOn(api, 'getSongs').mockImplementation(() =>
      Promise.resolve({
        json: () => ({}),
      }),
    );
    const dispatched: Array<string> = [];
    await runSaga(
      {
        dispatch: (action: any) => dispatched.push(action),
      },
      getSongsSaga,
      getMockAction({ onSuccess: mockOnSuccess, onError: mockOnError }),
    );

    expect(requestSongs).toHaveBeenCalledTimes(1);
    expect(mockOnSuccess).toHaveBeenCalledTimes(0);
    expect(mockOnError).toHaveBeenCalledTimes(1);
    requestSongs.mockClear();
  });
});
