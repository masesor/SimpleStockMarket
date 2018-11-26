import { createSelector } from 'reselect';
import { getIsNewTradeFormOpen } from '../../selectors/formSelectors';
import { INTIAL_FORM_STATE } from '../../models/form';

export default createSelector(
  getIsNewTradeFormOpen,
  (isOpen) => ({
    isOpen,
    initialValues: INTIAL_FORM_STATE
  })
);
