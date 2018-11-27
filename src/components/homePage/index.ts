import { connect } from 'react-redux';
import { withStyles, withWidth } from '@material-ui/core';

import { HomePageView, styles } from './views/HomePageView';
import selector from './selector';
import actions from './actions';
import withRoot from '../../withRoot';

export const HomePage = withRoot(withStyles(styles)(connect(selector, actions)(withWidth()(HomePageView))));