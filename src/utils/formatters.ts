import * as Moment from 'moment';

export const formatDateAsString = (date:Date):string => {
  const momentDate = Moment(date);
  return momentDate.isValid() ? momentDate.format('DD-MM-YYYY HH:mm') : '';
};
