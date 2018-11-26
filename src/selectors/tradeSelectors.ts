import { createSelector } from 'reselect';

import { IAppState } from '../models/state';

export const getTrades = createSelector(
  (state:IAppState) => state,
  (state) => state.trades
);

export const getTradesInReverseChronologicalOrder = createSelector(
  getTrades,
  (trades) => trades.sort(
    (a, b) => new Date(b.tradeDate).getTime() - new Date(a.tradeDate).getTime()
  )
);
