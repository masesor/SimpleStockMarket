// tslint:disable-next-line
/// <reference path="../untyped-modules.d.ts" />
import * as React from 'react';
import { Switch, Route, Router, RouteComponentProps } from 'react-router-dom';
import { Typography, withWidth, withStyles, Theme, createStyles, WithStyles } from '@material-ui/core';
import withRoot from './withRoot';
import { WithWidth } from '@material-ui/core/withWidth';

import { constants } from './constants';
import { browserHistory } from './configureStore';
import { HomePage } from './components/homePage';
import { isSmartphone } from './responsive';

export interface IProps extends RouteComponentProps<void>, WithStyles<typeof styles>, WithWidth {
}

class App extends React.Component<IProps> {
  render() {
    const { width } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <Typography
            variant="h6"
            color="inherit"
            noWrap={!isSmartphone(width)}
          >
            Sample App with Material UI
          </Typography>
        </header>
        <Router history={browserHistory}>
          <Switch>
            <Route exact={true} path={constants.routes.root} component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const drawerWidth = 240;
const styles = (theme:Theme) => createStyles({
  root: {
      width: '100%',
      height: '100%',
      zIndex: 1,
      overflow: 'hidden',
  },
  appFrame: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      position: 'absolute',
  },
  navIconHide: {
      [theme.breakpoints.up('md')]: {
          display: 'none',
      },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
      width: 250,
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.up('md')]: {
          width: drawerWidth,
          position: 'relative',
          height: '100%',
      },
  },
  content: {
      backgroundColor: theme.palette.background.default,
      width: '100%',
      height: 'calc(100% - 56px)',
      marginTop: 56,
      [theme.breakpoints.up('sm')]: {
          height: 'calc(100% - 64px)',
          marginTop: 64,
      },
  },
});

export default withRoot(withStyles(styles)(withWidth()(App)));
