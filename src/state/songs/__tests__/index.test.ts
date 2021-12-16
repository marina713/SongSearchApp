import * as actions from '../actions';
import { songs as reducer } from '..';
import { initialState } from '../constants';
import { MOCK_SONGS, MOCK_SORT_BY, MOCK_TRACK_ID, mockState } from '../mocks';

describe('Songs #reducer', () => {
  describe('Returns the correct state for `setSortBy` action', () => {
    it('when payload is Duration ASC', () => {
      const result = reducer(initialState, actions.setSortBy(MOCK_SORT_BY));
      expect(initialState.songs).toStrictEqual([]);
      expect(initialState.sortBy).toStrictEqual({ type: '', order: '' });
      expect(initialState.playingTrackId).toStrictEqual(0);
      expect(result.songs).toStrictEqual(initialState.songs);
      expect(result.sortBy).toStrictEqual(MOCK_SORT_BY);
      expect(result.playingTrackId).toStrictEqual(initialState.playingTrackId);
    });
  });

  describe('Returns the correct state for `setPlayingTrackId` action', () => {
    it('when payload is 12345', () => {
      const result = reducer(
        initialState,
        actions.setPlayingTrackId(MOCK_TRACK_ID),
      );
      expect(initialState.songs).toStrictEqual([]);
      expect(initialState.sortBy).toStrictEqual({ type: '', order: '' });
      expect(initialState.playingTrackId).toStrictEqual(0);
      expect(result.songs).toStrictEqual(initialState.songs);
      expect(result.sortBy).toStrictEqual(initialState.sortBy);
      expect(result.playingTrackId).toStrictEqual(MOCK_TRACK_ID);
    });
  });

  describe('Returns the correct state for `updateSongs` action', () => {
    it('when payload is a new Array of songs', () => {
      const result = reducer(initialState, actions.updateSongs(MOCK_SONGS));
      expect(initialState.songs).toStrictEqual([]);
      expect(initialState.sortBy).toStrictEqual({ type: '', order: '' });
      expect(initialState.playingTrackId).toStrictEqual(0);
      expect(result.songs).toStrictEqual(MOCK_SONGS);
      expect(result.sortBy).toStrictEqual(initialState.sortBy);
      expect(result.playingTrackId).toStrictEqual(initialState.playingTrackId);
    });
    it('when payload is an empty Array', () => {
      const result = reducer(mockState, actions.updateSongs([]));
      expect(mockState.songs).toStrictEqual(MOCK_SONGS);
      expect(mockState.sortBy).toStrictEqual(MOCK_SORT_BY);
      expect(mockState.playingTrackId).toStrictEqual(MOCK_TRACK_ID);
      expect(result.songs).toStrictEqual([]);
      expect(result.sortBy).toStrictEqual(initialState.sortBy);
      expect(result.playingTrackId).toStrictEqual(mockState.playingTrackId);
    });
  });
});
