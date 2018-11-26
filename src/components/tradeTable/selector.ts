import { createSelector } from 'reselect';
import { getTrades } from '../../selectors/tradeSelectors';

export default createSelector(
  getTrades,
  (trades) => ({
    trades
  })
);
