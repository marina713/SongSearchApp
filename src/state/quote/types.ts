import {ActionType} from 'typesafe-actions';

import * as actions from './actions';

export interface QuoteState {
  quote: string;
}

export type Action = ActionType<typeof actions>;

export interface GetQuotePayload {
  onSuccess: () => void;
  onError: () => void;
}

export interface GetQuoteApiPayload {
  category?: string;
}

export interface GetQuoteAction {
  payload: GetQuotePayload;
  type: string;
  meta?: any;
  error?: boolean;
}
