// tslint:disable-next-line
/// <reference path="../untyped-modules.d.ts" />
import * as React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import { constants } from './constants';
import { browserHistory } from './store';
import { HomePage } from './components/homePage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Switch>
            <Route exact={true} path={constants.routes.root} component={HomePage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
