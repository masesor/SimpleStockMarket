import { createEpicMiddleware, Epic, combineEpics } from 'redux-observable';
import { createStore, applyMiddleware, compose as composeProd, Action } from 'redux';
import { composeWithDevTools as composeDev } from 'redux-devtools-extension/developmentOnly';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import { IAppState } from './models/state';
import { appReducer } from './reducers/appReducer';
import { AppActionTypes } from './actions/actionTypes';
import { INITIAL_STATE } from './reducers/initialState';
import { systemEffects } from './effects/systemEffects';

export const rootEpic:Epic<Action, Action, any, any> = combineEpics(
    systemEffects,
);

const browserHistory = createHistory();
const epicMiddleware = createEpicMiddleware();

const compose:(...args:any[]) => any = process.env.NODE_ENV === 'production' ? composeProd : composeDev;

const middleware = compose(
    applyMiddleware(epicMiddleware, routerMiddleware(browserHistory))
);
const store = createStore<IAppState, AppActionTypes, IAppState, IAppState>(appReducer, INITIAL_STATE, middleware);

epicMiddleware.run(rootEpic);

export { browserHistory, store };
