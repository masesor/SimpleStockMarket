import { connect } from 'react-redux';
import withRoot from 'src/withRoot';
import { withStyles, withWidth } from '@material-ui/core';

import { NewTradeFormDialogView, styles } from './views/NewTradeFormDialogView';
import selector from './selector';
import actions from './actions';

export const NewTradeFormDialog = withRoot(withStyles(styles)(connect(selector, actions)(withWidth()(NewTradeFormDialogView))));