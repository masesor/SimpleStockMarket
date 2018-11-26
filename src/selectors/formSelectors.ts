import { createSelector } from 'reselect';

import { IAppState } from 'src/models/state';

export const getNewTradeForm = createSelector(
    (state:IAppState) => state,
    (state) => state.newTradeForm
);

export const getIsFormDialogOpen = createSelector(
    (state:IAppState) => state,
    (state) => state.newTradeForm.isOpen
);
  