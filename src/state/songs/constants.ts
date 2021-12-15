export const GET_SONGS = 'songs/GET_SONGS';
export const UPDATE_SONGS = 'songs/UPDATE_SONGS';
export const SET_SORT_BY = 'songs/SET_SORT_BY';

export const initialState = {
  songs: [],
  sortBy: {type: '', order: ''},
};

export const songKeyMap = new Map([
  ['Duration', 'trackTimeMillis'],
  ['Genre', 'primaryGenreName'],
  ['Price', 'trackPrice'],
]);
