import { createSelector } from 'reselect';

import { IAppState } from '../models/state';

export const getTest = createSelector(
    (state:IAppState) => state,
    (state) => state.test
  );
