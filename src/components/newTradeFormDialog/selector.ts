import { createSelector } from 'reselect';
import { getIsNewTradeFormOpen } from '../../selectors/formSelectors';

export default createSelector(
  getIsNewTradeFormOpen,
  (isOpen) => ({
    isOpen
  })
);
