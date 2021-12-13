import * as actions from '../actions';
import {quote as reducer} from '..';
import {initialState} from '../constants';

describe('Quote #reducer', () => {
  describe('Returns the correct state for `updateQuote` action', () => {
    it('when payload is a string', () => {
      const result = reducer(initialState, actions.updateQuote('New quote'));
      expect(initialState.quote).toStrictEqual('');
      expect(result.quote).toStrictEqual('New quote');
    });
  });
});
