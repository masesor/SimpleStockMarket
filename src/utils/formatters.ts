import * as Moment from 'moment';
import { Big } from 'big.js';
import { isNil } from 'lodash';

export const formatDateAsString = (date:Date):string => {
  const momentDate = Moment(date);
  return momentDate.isValid() ? momentDate.format('DD-MM-YYYY HH:mm') : '';
};

export function toFinancial(value:Big):number {
  return !isNil(value)
  ? parseFloat(value.toFixed(2))
  : 0;
}
