import { SongKeyType } from './types';

export const GET_SONGS = 'songs/GET_SONGS';
export const UPDATE_SONGS = 'songs/UPDATE_SONGS';
export const SET_SORT_BY = 'songs/SET_SORT_BY';
export const SET_PLAYING_TRACK_ID = 'songs/SET_PLAYING_TRACK_ID';

export const initialState = {
  songs: [],
  sortBy: { type: '', order: '' },
  playingTrackId: 0,
};

export const songKeyMap: Map<string, SongKeyType> = new Map([
  ['Duration', 'trackTimeMillis'],
  ['Genre', 'primaryGenreName'],
  ['Price', 'trackPrice'],
]);
