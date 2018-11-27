import { Epic, ofType, combineEpics } from 'redux-observable';
import { switchMap, map } from 'rxjs/internal/operators';
import { AnyAction, Action } from 'redux';

import { AppActions, fetchStocksSuccces } from '../actions';
import { IStock } from '../models/stock';
import { constants } from '../constants';
import { IAppState } from '../models/state';

export const fetchStocksEffect:Epic<AnyAction, AnyAction> = (action$, store$, { getJSON }) =>
  action$.pipe(
    ofType(AppActions.FETCH_STOCKS, AppActions.APPLICATION_LOAD, AppActions.SUBMIT_TRADE_SUCCESS),
    switchMap(() => {
      return getJSON(`${constants.api.BASE_API_URL}/${constants.api.GET_STOCKS}`)
        .pipe(
          map((response:IStock[]) => fetchStocksSuccces(response))
        )
    }),
    );

export const stockEffects: Epic<Action, Action, IAppState, any> = combineEpics(
    fetchStocksEffect
);
    