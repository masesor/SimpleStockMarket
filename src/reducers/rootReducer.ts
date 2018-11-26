import { combineReducers, AnyAction } from 'redux';
import createReducer from 'redux-action-reducer';
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

export const rootReducer = combineReducers<IAppState, AnyAction>({
  trades,
  stocks
});
