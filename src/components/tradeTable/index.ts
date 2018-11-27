import { connect } from 'react-redux';
import { withStyles, withWidth } from '@material-ui/core';

import { TradeTableView, styles } from './views/TradeTableView';
import selector from './selector';
import withRoot from '../../withRoot';

export const TradeTable = withRoot(withStyles(styles)(connect(selector)(withWidth()(TradeTableView))));