import { createSelector } from 'reselect';
import { getIsFormDialogOpen } from 'src/selectors/formSelectors';

export default createSelector(
  getIsFormDialogOpen,
  (isOpen) => ({
    isOpen
  })
);
