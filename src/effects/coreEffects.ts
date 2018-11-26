import {switchMap, map } from 'rxjs/internal/operators';
import { Action, AnyAction } from 'redux';
import { of } from 'rxjs';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { ajax } from 'rxjs/internal/observable/dom/ajax';

import { applicationLoad, AppActions, fetchTradesSuccces, fetchStocksSuccces } from '../actions';
import { IAppState } from '../models/state';
import { constants } from 'src/constants';
import { ITrade, IStock } from 'src/models/trade';

/**
 *  Initial effect to trigger data requests
 */
export const applicationLoadEffect:Epic<AnyAction, AnyAction, IAppState> = () => of(applicationLoad());

export const fetchStocksEffect:Epic<AnyAction, AnyAction> = (action$) =>
  action$.pipe(
    ofType(AppActions.FETCH_STOCKS, AppActions.APPLICATION_LOAD),
    switchMap(() => {
      return ajax
        .getJSON(`${constants.api.BASE_API_URL}/${constants.api.GET_STOCKS}`)
        .pipe(
          map((response:{ data:IStock[] }) => fetchStocksSuccces(response.data))
        )
    }),
    // catchError((error) => console.log(error))
  );

export const fetchTradesEffect:Epic<AnyAction, AnyAction> = (action$) =>
  action$.pipe(
    ofType(AppActions.FETCH_TRADES, AppActions.APPLICATION_LOAD),
    switchMap(() => {
      return ajax
        .getJSON(`${constants.api.BASE_API_URL}/${constants.api.GET_TRADES}`)
        .pipe(
          map((response: { data:ITrade[] }) => fetchTradesSuccces(response.data))
        )
    }),
    // catchError((error) => console.log(error))
  );

export const coreEffects:Epic<Action, Action, IAppState, any> = combineEpics(
  applicationLoadEffect,
  fetchStocksEffect,
  fetchTradesEffect
);
