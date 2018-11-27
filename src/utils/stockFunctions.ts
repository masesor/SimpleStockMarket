import { Big } from 'big.js';
import { isEmpty, isNil } from 'lodash';
import * as Moment from 'moment';

import { IStock, StockType } from '../models/stock';
import { ITrade } from '../models/trade';
import { toFinancial } from './formatters';

export const getDividendYield = (stock:IStock, currentPrice:number) => {
  if (!isNil(stock) && currentPrice === 0) {
    return 0;
  }
  let dividendYield = Big(0);
  if (stock.stockType === StockType.Common) {
    dividendYield = Big(stock.lastDividend).div(currentPrice);
  }

  if (stock.stockType === StockType.Preferred) {
    dividendYield = Big(stock.fixedDividend).times(stock.parValue).div(currentPrice);
  }

    return toFinancial(dividendYield);
}

export const getPERatio = (stock:IStock, currentPrice:number) => !isNil(stock) && stock.lastDividend !== 0
  ? toFinancial(Big(currentPrice).div(stock.lastDividend))
  : 0;

export const getGeometricMean = (trades:ITrade[]) => {
    if (isEmpty(trades)) {
        return 0;
    }
    const power = toFinancial(Big(1).div(trades.length));
    const pricesProduct = trades.reduce((total, cur) => total * cur.tradePrice, 1)

    return toFinancial(Big(Math.pow(pricesProduct, power)));
}

export const getStockPrice = (trades:ITrade[]) => {
  if (isEmpty(trades)) {
    return 0;
  }

  trades.filter((trade) => Moment(trade.tradeDate).isAfter(Moment().subtract(15, 'minutes')));

  const totalSharesBought = trades.reduce((total, trade) => total + trade.quantity, 0);
  const sumOfSharesByPrice = trades.reduce((total, cur) => total + (cur.quantity * cur.tradePrice), 0);

  return toFinancial(Big(sumOfSharesByPrice).div(totalSharesBought));
};
