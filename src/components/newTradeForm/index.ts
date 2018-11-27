import { connect } from 'react-redux';
import { withStyles, withWidth } from '@material-ui/core';
import { reduxForm, FormErrors } from 'redux-form';

import { NewTradeFormView, styles, IProps, IDispatchProps } from './views/NewTradeFormView';
import { INewTradeForm } from '../../models/form';
import withRoot from '../../withRoot';
import selector from './selector';
import actions from './actions';

const validate = (values:INewTradeForm, props:IProps & IDispatchProps):FormErrors<INewTradeForm> => {
  const { ticker, tradePrice, quantity } = values;

  const errors:FormErrors<INewTradeForm> = {};

  if (!ticker) {
    errors.ticker = 'Required';
  }

  if (!tradePrice) {
    errors.tradePrice = 'Required';
  }

  if (!quantity) {
    errors.quantity = 'Required';
  }

  if (isNaN(tradePrice) || tradePrice <= 0) {
    errors.tradePrice = 'Enter a number > 0';
  }

  if (isNaN(quantity) || quantity <= 0) {
    errors.quantity = 'Enter a number > 0';
  }

  return errors;
};

const componentWithForm = reduxForm({
  form: 'newTradeForm',
  validate
})(NewTradeFormView);

export const NewTradeForm = withRoot(
  withStyles(styles)(
    connect(selector, actions)(
      withWidth()(
        componentWithForm
      )
    )
  )
);
