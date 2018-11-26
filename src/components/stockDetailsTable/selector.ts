import { createSelector } from 'reselect';

import { getStockDetails } from 'src/selectors/stockSelectors';

export default createSelector(
  getStockDetails,
  (stockDetails) => ({
    stockDetails
  })
);
