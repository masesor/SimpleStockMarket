import { Subject, of } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { deepEqual } from 'assert';

import {
  fetchTrades,
  fetchTradesSuccces,
  submitTrade,
  submitTradeSuccess,
  submitTradeError,
  toggleNewTradeFormDialog
} from '../actions';
import { fetchTradesEffect, submitTradeEffect, dismissNewTradeDialogEffect } from './tradeEffects';
import { INITIAL_STATE } from '../reducers/initialState';
import { ITrade, BuySellInd } from '../models/trade';
import { INewTradeForm } from '../models/form';

describe('Trade Effects', () => {
  describe('fetchTradeEffects', () => {
    const trades:ITrade[] = [
      {
        id: '001',
        ticker: 'TEST',
        buySellInd: BuySellInd.Buy,
        tradePrice: 1.5,
        quantity: 5,
        tradeDate: new Date(),
        tradeValue: 5
      }
    ];

    it('Fetches the trades from service', async (done) => {
      // Arrange
      const action$ = ActionsObservable.of(fetchTrades());
      const state$ = new StateObservable(new Subject(), INITIAL_STATE); // Store not required in this epic
      const dependencies = {
        getJSON: (url:string) => of(trades)
      };

      fetchTradesEffect(action$, state$, dependencies)
        .subscribe((actions) => {
          deepEqual(actions, fetchTradesSuccces(trades));
          done();
        });
    });

    it('Submit the trade request to the service successfully', async (done) => {
      // Arrange
      const newTrade = {
        id: '001',
        ticker: 'TEST',
        buySellInd: BuySellInd.Buy,
        tradePrice: 1.5,
        quantity: 5,
        tradeDate: new Date(),
        tradeValue: 5
      };
      const mockResponse = {
        status: 200, // All good
        response: newTrade
      };
      const action$ = ActionsObservable.of(submitTrade(newTrade));
      const state$ = new StateObservable(new Subject(), INITIAL_STATE); // Store not required in this epic
      const dependencies = {
        post: (url:string, payload:INewTradeForm) => of(mockResponse)
      };

      submitTradeEffect(action$, state$, dependencies)
        .subscribe((actions) => {
          deepEqual(actions, submitTradeSuccess());
          done();
        });
    });

    it('Submit the trade request to the service but receive ERROR', async (done) => {
      // Arrange
      const newTrade = {
        id: '001',
        ticker: 'TEST',
        buySellInd: BuySellInd.Buy,
        tradePrice: 1.5,
        quantity: 5,
        tradeDate: new Date(),
        tradeValue: 5
      };
      const mockResponse = {
        status: 500, // internal server error
        response: newTrade
      };
      const action$ = ActionsObservable.of(submitTrade(newTrade));
      const state$ = new StateObservable(new Subject(), INITIAL_STATE); // Store not required in this epic
      const dependencies = {
        post: (url:string, payload:INewTradeForm) => of(mockResponse)
      };

      submitTradeEffect(action$, state$, dependencies)
        .subscribe((actions) => {
          deepEqual(actions, submitTradeError());
          done();
        });
    });

    it('Toggles the new form dialog when trade is submitted succesfully', async (done) => {
      // Arrange
      const action$ = ActionsObservable.of(submitTradeSuccess());
      const state$ = new StateObservable(new Subject(), INITIAL_STATE); // Store not required in this epic

      dismissNewTradeDialogEffect(action$, state$, {})
        .subscribe((actions) => {
          deepEqual(actions, toggleNewTradeFormDialog());
          done();
        });
    });
  });
});
