import { Epic, ofType, combineEpics } from 'redux-observable';
import { AnyAction, Action } from 'redux';
import { switchMap, map, catchError } from 'rxjs/internal/operators';
import { ajax } from 'rxjs/internal/observable/dom/ajax';
import { of, iif } from 'rxjs';
import { isNil } from 'lodash';

import { AppActions, fetchStocksSuccces, fetchTradesSuccces, submitTradeSuccess, submitTradeError, toggleNewTradeFormDialog } from 'src/actions';
import { IStock, ITrade } from 'src/models/trade';
import { constants } from 'src/constants';
import { IAppState } from 'src/models/state';
import { INewTradeForm } from 'src/models/form';
import { getNewTradePayload } from 'src/utils/mappers';

const fetchStocksEffect:Epic<AnyAction, AnyAction> = (action$) =>
  action$.pipe(
    ofType(AppActions.FETCH_STOCKS, AppActions.APPLICATION_LOAD, AppActions.SUBMIT_TRADE_SUCCESS),
    switchMap(() => {
      return ajax
        .getJSON(`${constants.api.BASE_API_URL}/${constants.api.GET_STOCKS}`)
        .pipe(
          map((response:IStock[]) =>fetchStocksSuccces(response))
        )
    }),
    );

const fetchTradesEffect:Epic<AnyAction, AnyAction> = (action$) =>
  action$.pipe(
    ofType(AppActions.FETCH_TRADES, AppActions.APPLICATION_LOAD, AppActions.SUBMIT_TRADE_SUCCESS),
    switchMap(() => {
      return ajax
        .getJSON(`${constants.api.BASE_API_URL}/${constants.api.GET_TRADES}`)
        .pipe(
          map((response:ITrade[]) => {
              return fetchTradesSuccces(response)
          })
        )
    }),
  );

const submitTradeEffect: Epic<AnyAction, AnyAction> = (action$) =>
    action$.pipe(
        ofType(AppActions.SUBMIT_TRADE),
        map((action) => action.payload.tradeDetails),
        switchMap((tradeDetails: INewTradeForm) => 
            ajax
                .post(`${constants.api.BASE_API_URL}/${constants.api.SUBMIT_TRADE}`, getNewTradePayload(tradeDetails))
                .pipe(
                    switchMap((data:any) =>
                    iif(
                        () => data.status === 200 && !isNil(data.response),
                        of(submitTradeSuccess()),
                        of(submitTradeError())
                    )
                    )
                )
        ),
        catchError(() => of(submitTradeError()))
    );

const dismissNewTradeDialogEffect:Epic<AnyAction, AnyAction> = (action$) =>
action$.pipe(
    ofType(AppActions.SUBMIT_TRADE_SUCCESS),
    map(() => toggleNewTradeFormDialog())
);

export const tradeEffects:Epic<Action, Action, IAppState, any> = combineEpics(
    fetchStocksEffect,
    fetchTradesEffect,
    submitTradeEffect,
    dismissNewTradeDialogEffect
);

