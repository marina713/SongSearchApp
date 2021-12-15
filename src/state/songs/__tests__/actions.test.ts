import configureStore from 'redux-mock-store';
import {GET_SONGS, UPDATE_SONGS} from '../constants';

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
          payload: {onSuccess, onError},
        },
      ];

      store.dispatch(actions.getSongs({onSuccess, onError}));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('updateSong', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: UPDATE_SONGS,
          payload: 'New song query',
        },
      ];

      store.dispatch(actions.updateSongs('Nirvana'));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
