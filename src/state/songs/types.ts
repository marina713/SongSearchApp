import {ActionType} from 'typesafe-actions';

import * as actions from './actions';

export interface Song {
  wrapperType?: string;
  kind?: string;
  artistId?: number;
  collectionId?: number;
  trackId: number;
  artistName?: string;
  collectionName?: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl?: string;
  previewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  releaseDate?: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  country?: string;
  currency?: string;
  primaryGenreName?: string;
  isStreamable?: boolean;
}

export type Action = ActionType<typeof actions>;

export interface GetSongsPayload {
  onSuccess: () => void;
  onError: () => void;
  term: string;
}

export interface GetSongsApiPayload {
  term?: string;
}

export interface GetSongsAction {
  payload: GetSongsPayload;
  type: string;
  meta?: any;
  error?: boolean;
}

export type SortByType = 'Duration' | 'Genre' | 'Price' | '';
export type SortByOrder = 'ASC' | 'DESC' | '';

export interface SortBy {
  type: string;
  order: string;
}

export interface SongsState {
  songs: Song[];
  sortBy: SortBy;
}
