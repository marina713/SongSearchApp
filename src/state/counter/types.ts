import {ActionType} from 'typesafe-actions';

import * as actions from './actions';

export interface CounterState {
  value: number;
}

export type Action = ActionType<typeof actions>;
