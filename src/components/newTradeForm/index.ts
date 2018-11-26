import { connect } from 'react-redux';
import withRoot from 'src/withRoot';
import { withStyles, withWidth } from '@material-ui/core';

import { NewTradeFormView, styles } from './views/NewTradeFormView';
import selector from './selector';

export const NewTradeForm = withRoot(withStyles(styles)(connect(selector)(withWidth()(NewTradeFormView))));