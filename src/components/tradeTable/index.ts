import { connect } from 'react-redux';

import { TradeTableView, styles } from './views/TradeTableView';
import selector from './selector';
import withRoot from 'src/withRoot';
import { withStyles, withWidth } from '@material-ui/core';

export const TradeTable = withRoot(withStyles(styles)(connect(selector)(withWidth()(TradeTableView))));