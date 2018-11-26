import { createSelector } from 'reselect';
import { getIsNewTradeFormOpen } from 'src/selectors/formSelectors';

export default createSelector(
  getIsNewTradeFormOpen,
  (isOpen) => ({
    isOpen
  })
);
