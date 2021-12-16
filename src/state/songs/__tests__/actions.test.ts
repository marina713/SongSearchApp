import configureStore from 'redux-mock-store';
import {
  GET_SONGS,
  UPDATE_SONGS,
  SET_SORT_BY,
  SET_PLAYING_TRACK_ID,
} from '../constants';
import {MOCK_SONGS, MOCK_TRACK_ID, MOCK_SORT_BY} from './mocks';

import * as actions from '../actions';

const mockStore = configureStore();
const store = mockStore();

const defaultParams = {
  error: undefined,
  meta: undefined,
  payload: undefined,
};

describe('Songs actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('getSongs', () => {
    test('dispatches the correct action and payload', () => {
      const onSuccess = console.log;
      const onError = console.log;
      const expectedActions = [
        {
          ...defaultParams,
          type: GET_SONGS,
          payload: {onSuccess, onError, term: 'Sun'},
        },
      ];

      store.dispatch(actions.getSongs({onSuccess, onError, term: 'Sun'}));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setSortBy', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: SET_SORT_BY,
          payload: MOCK_SORT_BY,
        },
      ];

      store.dispatch(actions.setSortBy(MOCK_SORT_BY));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setPlayingTrackId', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: SET_PLAYING_TRACK_ID,
          payload: MOCK_TRACK_ID,
        },
      ];

      store.dispatch(actions.setPlayingTrackId(MOCK_TRACK_ID));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('updateSongs', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: UPDATE_SONGS,
          payload: MOCK_SONGS,
        },
      ];

      store.dispatch(actions.updateSongs(MOCK_SONGS));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
