import { connect } from 'react-redux';

import { StockDetailsTableView, styles } from './views/StockDetailsTableView';
import selector from './selector';
import withRoot from 'src/withRoot';
import { withStyles, withWidth } from '@material-ui/core';

export const StockDetailsTable = withRoot(withStyles(styles)(connect(selector)(withWidth()(StockDetailsTableView))));