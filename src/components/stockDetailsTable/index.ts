import { connect } from 'react-redux';
import { withStyles, withWidth } from '@material-ui/core';

import { StockDetailsTableView, styles } from './views/StockDetailsTableView';
import selector from './selector';
import withRoot from '../../withRoot';

export const StockDetailsTable = withRoot(withStyles(styles)(connect(selector)(withWidth()(StockDetailsTableView))));