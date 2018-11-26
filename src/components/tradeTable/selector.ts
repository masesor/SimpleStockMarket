import { createSelector } from 'reselect';
import { getTrades } from '../../selectors/testSelectors';

export default createSelector(
  getTrades,
  (trades) => ({
    trades
  })
);
