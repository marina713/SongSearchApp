import {
  UPDATE_SONGS,
  initialState,
  SET_SORT_BY,
  SET_PLAYING_TRACK_ID,
} from './constants';
import {SongsState, Action} from './types';

export const songs = (
  state: SongsState = initialState,
  action: Action,
): SongsState => {
  switch (action.type) {
    case UPDATE_SONGS: {
      const {payload} = action;
      return {
        ...state,
        songs: payload,
        sortBy: initialState.sortBy,
      };
    }

    case SET_SORT_BY: {
      const {payload} = action;
      return {
        ...state,
        sortBy: payload,
      };
    }

    case SET_PLAYING_TRACK_ID: {
      const {payload} = action;
      return {
        ...state,
        playingTrackId: payload,
      };
    }

    default: {
      return state;
    }
  }
};
