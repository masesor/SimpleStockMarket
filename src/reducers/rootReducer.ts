import { combineReducers, AnyAction } from 'redux';
import createReducer from 'redux-action-reducer';
import { reducer as formReducer } from 'redux-form';

import { AppActions } from '../actions';
import { IAppState } from '../models/state';
import { ITrade, IStock } from 'src/models/trade';

const trades = createReducer(
  [AppActions.FETCH_TRADES_SUCCESS,
  (state:ITrade[], payload: { trades:ITrade[] }) => payload.trades]
)([]);

const stocks = createReducer(
  [AppActions.FETCH_STOCKS_SUCCESS,
  (state:ITrade[], payload: { stocks:IStock[] }) => payload.stocks]
)([]);

const isNewTradeFormOpen = createReducer(
  [AppActions.TOGGLE_NEW_TRADE_FORM_DIALOG,
  (state:boolean) => !state
  ]
)(false);

export const rootReducer = combineReducers<IAppState, AnyAction>({
  trades,
  stocks,
  isNewTradeFormOpen,
  form: formReducer
});
