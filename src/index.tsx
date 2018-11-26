import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { store, browserHistory } from './configureStore';
import App from './App';
import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
