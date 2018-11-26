// tslint:disable-next-line
/// <reference path="../untyped-modules.d.ts" />
import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import {
  Typography,
  withWidth,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  IconButton,
  Toolbar,
  Hidden,
  Drawer
} from '@material-ui/core';
import withRoot from './withRoot';
import { WithWidth } from '@material-ui/core/withWidth';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

import { constants } from './constants';
import { browserHistory } from './configureStore';
import { HomePage } from './components/homePage';
import { isSmartphone } from './responsive';

interface IProps extends RouteComponentProps<void>, WithStyles<typeof styles>, WithWidth {}

interface IStateProps {
  mobileOpen:boolean;
}

class App extends React.Component<IProps, IStateProps> {

  state = {
    mobileOpen: true,
  };

  routes = (
    <div className={this.props.classes.content}>
      <Route exact={true} path={constants.routes.root} component={HomePage} />
      <Route exact={true} path={constants.routes.home} component={HomePage} />
    </div>
  );

  private handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  render() {
    const { width, classes } = this.props;

    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        <Divider />
        <List>
          <ListItem button={true} onClick={() => browserHistory.push('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Trade Summary" />
          </ListItem>
        </List>
        <div style={{ height: 10000 }} />
      </div>
    );

    return (
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap={!isSmartphone(width)}>
                  Trading App
                </Typography>
              </Toolbar>
            </AppBar>
            <Hidden mdUp={true}>
              <Drawer
                variant="temporary"
                anchor={'left'}
                open={this.state.mobileOpen}
                classes={{
                  paper: classes.drawerPaper,
                }}
                onClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown={true} implementation="css">
              <Drawer
                variant="permanent"
                open={true}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            {this.routes}
            </div>
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
