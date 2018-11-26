import { createSelector } from 'reselect';

import { IAppState } from 'src/models/state';

export const getIsNewTradeFormOpen = createSelector(
    (state:IAppState) => state,
    (state) => state.isNewTradeFormOpen
);
  