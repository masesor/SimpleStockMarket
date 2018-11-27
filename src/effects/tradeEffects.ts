import { Epic, ofType, combineEpics } from 'redux-observable';
import { AnyAction, Action } from 'redux';
import { switchMap, map } from 'rxjs/internal/operators';

import { AppActions, fetchTradesSuccces, toggleNewTradeFormDialog } from '../actions';
import { ITrade } from '../models/trade';
import { constants } from '../constants';
import { IAppState } from '../models/state';

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

/* const submitTradeEffect: Epic<AnyAction, AnyAction> = (action$, store$, { ajax }) =>
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
    ); */

export const dismissNewTradeDialogEffect:Epic<AnyAction, AnyAction> = (action$) =>
  action$.pipe(
    ofType(AppActions.SUBMIT_TRADE_SUCCESS),
    map(() => toggleNewTradeFormDialog())
  );

export const tradeEffects:Epic<Action, Action, IAppState, any> = combineEpics(
  fetchTradesEffect,
  // submitTradeEffect,
  dismissNewTradeDialogEffect
);
