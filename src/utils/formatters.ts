import * as Moment from 'moment';
import { Big } from 'big.js';

export const formatDateAsString = (date:Date):string => {
  const momentDate = Moment(date);
  return momentDate.isValid() ? momentDate.format('DD-MM-YYYY HH:mm') : '';
};

export function toFinancial(value:Big):number {
  return parseFloat(value.toFixed(2));
}
