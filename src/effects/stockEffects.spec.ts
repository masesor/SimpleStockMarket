import { Subject, of } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { deepEqual } from 'assert';

import { IStock, StockType } from '../models/stock';
import { fetchStocks, fetchStocksSuccces } from '../actions';
import { INITIAL_STATE } from '../reducers/initialState';
import { fetchStocksEffect } from './stockEffects';

describe('stockEffects', () => {
  describe('fetchStocksEffect', () => {
    const stocks:IStock[] = [
      {
        ticker: 'TEST',
        stockType: StockType.Common,
        lastDividend: 0,
        fixedDividend: 0,
        parValue: 5
      }
    ];

    it('Fetches the stocks from service', async (done) => {
      // Arrange
      const action$ = ActionsObservable.of(fetchStocks());
      const state$ = new StateObservable(new Subject(), INITIAL_STATE); // Store not required in this epic
      const dependencies = {
        getJSON: (url:string) => of(stocks)
      };

      fetchStocksEffect(action$, state$, dependencies)
        .subscribe((actions) => {
          deepEqual(actions, fetchStocksSuccces(stocks));
          done();
        });
    });
  });
});
