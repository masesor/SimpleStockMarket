import { createSelector } from 'reselect';

import { IAppState } from '../models/state';

export const getTrades = createSelector(
  (state:IAppState) => state,
  (state) => state.trades
);
