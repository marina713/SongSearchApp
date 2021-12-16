import { createSelector } from 'reselect';
import { RootState } from '../reducers';
import { initialState, songKeyMap } from './constants';

export const getState = (state: RootState) => state.songs || initialState;

export const getSongs = createSelector(
  getState,
  state => state.songs || initialState.songs,
);

export const getSongsLength = createSelector(getSongs, songs => songs.length);

export const getSortBy = createSelector(
  getState,
  state => state.sortBy || initialState.sortBy,
);

export const getPlayingTrackId = createSelector(
  getState,
  state => state.playingTrackId || initialState.playingTrackId,
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

export const getTrackPlayerSongs = createSelector(getSortedSongs, songs =>
  songs.map(song => {
    return {
      id: song.trackId || 0,
      url: song.previewUrl || '',
      title: song.trackName || '',
      artist: song.artistName || '',
      artwork: song.artworkUrl100 || '',
    };
  }),
);

export const getCurrentSong = createSelector(
  [getPlayingTrackId, getSortedSongs],
  (trackId, songs) => {
    if (!trackId) return { index: 0, song: songs[0] };
    const index = songs.findIndex(song => song.trackId === trackId);
    return { index, song: songs[index] };
  },
);

export const getNextTrackId = createSelector(
  [getCurrentSong, getSortedSongs, getSongsLength],
  (currentSong, songs, length) => {
    if (!currentSong.index) return songs[1].trackId;
    if (currentSong.index === length - 1) return songs[0].trackId;
    return songs[currentSong.index + 1].trackId;
  },
);
export const getPrevTrackId = createSelector(
  [getCurrentSong, getSortedSongs, getSongsLength],
  (currentSong, songs, length) => {
    if (!currentSong.index) return songs[length - 1].trackId;
    return songs[currentSong.index - 1].trackId;
  },
);
