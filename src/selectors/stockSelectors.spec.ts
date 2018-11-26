import * as selectors from './stockSelectors';
import { StockType } from '../models/stock';
import { IAppState } from '../models/state';
import { BuySellInd } from '../models/trade';

describe('stockSelectors', () => {
  describe('getStocks', () => {
    it('Returns empty list when no stocks', () => {
      // Arrange
      const state:IAppState = {
        stocks: [],
        trades: [],
        isNewTradeFormOpen: false,
        form: {}
      };

      // Act
      const result = selectors.getStocks(state);

      // Assert
      expect(result).toEqual([]);
    });

    it('Returns stock list when stocks present', () => {
      // Arrange
      const stocks = [{
        ticker: 'TEST',
        stockType: StockType.Common,
        lastDividend: 5,
        fixedDividend: 0,
        parValue: 100
      }];

      const state:IAppState = {
        stocks,
        trades: [],
        isNewTradeFormOpen: false,
        form: {}
      };

      // Act
      const result = selectors.getStocks(state);

      // Assert
      expect(result).toEqual(stocks);
    });
  });

  describe('getStockDetails', () => {
    it('Returns empty list when no trades or stocks', () => {
      // Arrange
      const state:IAppState = {
        trades: [],
        stocks: [],
        isNewTradeFormOpen: false,
        form: {}
      };

      // Act
      const result = selectors.getStockDetails(state);

      // Assert
      expect(result).toEqual([]);
    });

    it('Returns stock details when stock/trade present', () => {
      // Arrange
      const trades = [{
        id: '001',
        ticker: 'TEST',
        buySellInd: BuySellInd.Buy,
        tradePrice: 1.5,
        quantity: 5,
        tradeDate: new Date(),
        tradeValue: 5
      }];

      const stocks = [{
        ticker: 'TEST',
        stockType: StockType.Common,
        lastDividend: 5,
        fixedDividend: 0,
        parValue: 100
      }];

      const state:IAppState = {
        trades,
        stocks,
        isNewTradeFormOpen: false,
        form: {}
      };

      // Act
      const result = selectors.getStockDetails(state);

      // Assert
      result.forEach((stockDetail) => {
        expect(stockDetail).toHaveProperty('ticker');
        expect(stockDetail).toHaveProperty('dividendYield');
        expect(stockDetail).toHaveProperty('peRatio');
        expect(stockDetail).toHaveProperty('geometricMean');
        expect(stockDetail).toHaveProperty('stockPrice');
      });
    });
  });
});
