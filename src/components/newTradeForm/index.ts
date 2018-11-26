import { connect } from 'react-redux';
import withRoot from 'src/withRoot';
import { withStyles, withWidth } from '@material-ui/core';

import { NewTradeFormView, styles, IProps, IDispatchProps } from './views/NewTradeFormView';
import selector from './selector';
import actions from './actions';
import { reduxForm, FormErrors } from 'redux-form';
import { INewTradeForm } from 'src/models/form';

const validate = (values: INewTradeForm, props: IProps & IDispatchProps): FormErrors<INewTradeForm> => {
    const { ticker, tradePrice, quantity } = values;

    const errors: FormErrors<INewTradeForm> = {};

    if (!ticker) {
        errors.ticker = 'Required';
    }

    if (!tradePrice) {
        errors.tradePrice = 'Required';
    }

    if (!quantity) {
        errors.quantity = 'Required';
    }

    if (isNaN(tradePrice)) {
        errors.tradePrice = 'Enter a number';
    }

    if (isNaN(quantity)) {
        errors.quantity = 'Enter a number';
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