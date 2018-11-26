import { connect } from 'react-redux';
import withRoot from 'src/withRoot';
import { withStyles, withWidth } from '@material-ui/core';

import { HomePageView, styles } from './views/HomePageView';
import selector from './selector';

export const HomePage = withRoot(withStyles(styles)(connect(selector)(withWidth()(HomePageView))));