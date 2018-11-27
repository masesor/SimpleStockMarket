import { createSelector } from 'reselect';

import { getStockDetails } from '../../selectors/stockSelectors';

export default createSelector(
  getStockDetails,
  (stockDetails) => ({
    stockDetails
  })
);
