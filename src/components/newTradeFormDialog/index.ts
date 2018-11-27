import { connect } from 'react-redux';
import { withStyles, withWidth } from '@material-ui/core';

import withRoot from '../../withRoot';
import { NewTradeFormDialogView, styles } from './views/NewTradeFormDialogView';
import selector from './selector';
import actions from './actions';

export const NewTradeFormDialog = withRoot(withStyles(styles)(connect(selector, actions)(withWidth()(NewTradeFormDialogView))));