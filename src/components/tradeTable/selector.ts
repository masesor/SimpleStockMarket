import { createSelector } from 'reselect';
import { getTradesInReverseChronologicalOrder } from '../../selectors/tradeSelectors';

export default createSelector(
  getTradesInReverseChronologicalOrder,
  (trades) => ({
    trades
  })
);
