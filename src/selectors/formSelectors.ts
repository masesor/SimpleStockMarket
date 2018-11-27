import { createSelector } from 'reselect';

import { IAppState } from '../models/state';

export const getIsNewTradeFormOpen = createSelector(
  (state:IAppState) => state,
  (state) => state.isNewTradeFormOpen
);
