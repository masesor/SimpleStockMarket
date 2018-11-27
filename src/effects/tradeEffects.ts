import { AnyAction, Action } from 'redux';
import { iif, of } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/internal/operators';
import { isNil } from 'lodash';

import { ITrade } from '../models/trade';
import { constants } from '../constants';
import { IAppState } from '../models/state';
import { INewTradeForm } from '../models/form';
import { getNewTradePayload } from '../utils/mappers';
import {
  AppActions,
  fetchTradesSuccces,
  submitTradeSuccess,
  submitTradeError,
  toggleNewTradeFormDialog
} from '../actions';

export const fetchTradesEffect:Epic<AnyAction, AnyAction> = (action$, store$, { getJSON }) =>
  action$.pipe(
    ofType(AppActions.FETCH_TRADES, AppActions.APPLICATION_LOAD, AppActions.SUBMIT_TRADE_SUCCESS),
    switchMap(() => {
      return getJSON(`${constants.api.BASE_API_URL}/${constants.api.GET_TRADES}`)
        .pipe(
          map((response:ITrade[]) => {
            return fetchTradesSuccces(response);
          })
        );
    }),
  );

export const submitTradeEffect:Epic<AnyAction, AnyAction> = (action$, store$, { post }) =>
  action$.pipe(
    ofType(AppActions.SUBMIT_TRADE),
    map((action) => action.payload.tradeDetails),
    switchMap((tradeDetails:INewTradeForm) =>
      post(`${constants.api.BASE_API_URL}/${constants.api.SUBMIT_TRADE}`, getNewTradePayload(tradeDetails))
        .pipe(
          switchMap((data:any) =>
            iif(
              () => data.status === 200 && !isNil(data.response),
              of(submitTradeSuccess()),
              of(submitTradeError())
            )
          ),
          catchError(() => of(submitTradeError()))
        )
    ),
  );

export const dismissNewTradeDialogEffect:Epic<AnyAction, AnyAction> = (action$) =>
  action$.pipe(
    ofType(AppActions.SUBMIT_TRADE_SUCCESS),
    map(() => toggleNewTradeFormDialog())
  );

export const tradeEffects:Epic<Action, Action, IAppState, any> = combineEpics(
  fetchTradesEffect,
  submitTradeEffect,
  dismissNewTradeDialogEffect
);
