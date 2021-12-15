import {createSelector} from 'reselect';
import {RootState} from '../reducers';
import {initialState, songKeyMap} from './constants';

export const getState = (state: RootState) => state.songs || initialState;

export const getSongs = createSelector(
  getState,
  state => state.songs || initialState.songs,
);

export const getSortBy = createSelector(
  getState,
  state => state.sortBy || initialState.sortBy,
);

const getSortType = createSelector(getSortBy, sortBy => sortBy.type);

const getSortOrder = createSelector(getSortBy, sortBy => sortBy.order);

export const getSortedSongs = createSelector(
  [getSongs, getSortType, getSortOrder],
  (songs, type, order) => {
    const key = songKeyMap.get(type);
    const isAscending = order === 'ASC';
    const sortedSongs = key
      ? [...songs].sort((a, b) =>
          (isAscending ? a[key] > b[key] : b[key] > a[key]) ? 1 : -1,
        )
      : songs;

    return sortedSongs;
  },
);

export const getSongByTrackId = createSelector(
  [getSongs, (_, trackId) => trackId],
  (songs, trackId) => songs.find(song => song.trackId === trackId),
);
