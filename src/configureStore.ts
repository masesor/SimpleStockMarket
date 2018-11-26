import { createEpicMiddleware, Epic, combineEpics } from 'redux-observable';
import { createStore, applyMiddleware, compose as composeProd, Action } from 'redux';
import { composeWithDevTools as composeDev } from 'redux-devtools-extension/developmentOnly';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import { IAppState } from './models/state';
import { rootReducer } from './reducers/rootReducer';
import { AppActionTypes } from './actions/actionTypes';
import { INITIAL_STATE } from './reducers/initialState';
import { coreEffects } from './effects/coreEffects';
import { tradeEffects } from './effects/tradeEffects';

export const rootEpic:Epic<Action, Action, any, any> = combineEpics(
    coreEffects,
    tradeEffects
);

const browserHistory = createHistory();
const epicMiddleware = createEpicMiddleware();

const compose:(...args:any[]) => any = process.env.NODE_ENV === 'production' ? composeProd : composeDev;

const middleware = compose(
    applyMiddleware(epicMiddleware, routerMiddleware(browserHistory))
);
const store = createStore<IAppState, AppActionTypes, IAppState, IAppState>(rootReducer, INITIAL_STATE, middleware);

epicMiddleware.run(rootEpic);

export { browserHistory, store };
