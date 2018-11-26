import { createSelector } from 'reselect';
import { getTest } from '../../selectors/testSelectors';

export default createSelector(
  getTest,
  (test) => ({
    value: test
  })
);
