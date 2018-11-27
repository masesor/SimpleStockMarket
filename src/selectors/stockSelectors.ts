import { createSelector } from 'reselect';

import { IAppState } from '../models/state';
import {
  getDividendYield,
  getPERatio,
  getGeometricMean,
  getStockPrice
} from '../utils/stockFunctions';
import { getTrades } from './tradeSelectors';

export const getStocks = createSelector(
  (state:IAppState) => state,
  (state) => state.stocks
);

export const getStockDetails = createSelector(
  getStocks,
  getTrades,
  (stocks, trades) => stocks.map((stock) => {
    const tradesForStock = trades.filter((trade) => trade.ticker === stock.ticker);
    const stockPrice = getStockPrice(tradesForStock);

    return {
      ...stock,
      dividendYield: getDividendYield(stock, stockPrice),
      peRatio: getPERatio(stock, stockPrice),
      geometricMean: getGeometricMean(tradesForStock),
      stockPrice
    };
  })
);
