import { action } from 'typesafe-actions';
import {
  GET_SONGS,
  UPDATE_SONGS,
  SET_SORT_BY,
  SET_PLAYING_TRACK_ID,
} from './constants';
import { GetSongsPayload, Song, SortBy } from './types';

export const getSongs = (payload: GetSongsPayload) =>
  action(GET_SONGS, payload);

export const updateSongs = (payload: Array<Song>) =>
  action(UPDATE_SONGS, payload);

export const setSortBy = (payload: SortBy) => action(SET_SORT_BY, payload);

export const setPlayingTrackId = (payload: number) =>
  action(SET_PLAYING_TRACK_ID, payload);
