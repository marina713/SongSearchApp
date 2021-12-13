import configureStore from 'redux-mock-store';
import {GET_QUOTE, UPDATE_QUOTE} from '../constants';

import * as actions from '../actions';

const mockStore = configureStore();
const store = mockStore();

const defaultParams = {
  error: undefined,
  meta: undefined,
  payload: undefined,
};

describe('Quote actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('getQuote', () => {
    test('dispatches the correct action and payload', () => {
      const onSuccess = console.log;
      const onError = console.log;
      const expectedActions = [
        {
          ...defaultParams,
          type: GET_QUOTE,
          payload: {onSuccess, onError},
        },
      ];

      store.dispatch(actions.getQuote({onSuccess, onError}));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('updateQuote', () => {
    test('dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: UPDATE_QUOTE,
          payload: 'New quote',
        },
      ];

      store.dispatch(actions.updateQuote('New quote'));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
