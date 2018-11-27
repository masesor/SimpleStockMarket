import { combineReducers, AnyAction } from 'redux';
import createReducer from 'redux-action-reducer';
import { reducer as formReducer } from 'redux-form';

import { AppActions } from '../actions';
import { IAppState } from '../models/state';
import { ITrade } from '../models/trade';
import { IStock } from '../models/stock';

const trades = createReducer(
  [AppActions.FETCH_TRADES_SUCCESS,
  (state:ITrade[], payload:ITrade[]) => payload]
)([]);

const stocks = createReducer(
  [AppActions.FETCH_STOCKS_SUCCESS,
  (state:IStock[], payload:IStock[]) => payload]
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
