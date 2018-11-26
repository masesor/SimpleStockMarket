import { IStock, StockType } from '../models/stock';
import { getDividendYield, getPERatio, getGeometricMean, getStockPrice } from './stockFunctions';
import { BuySellInd } from '../models/trade';

describe('stockFuncions', () => {

  describe('getDividendYield', () => {
    it('Returns 0 if stock price is 0', () => {
      // Arrange
      const stock:IStock = {
        ticker: 'TEST',
        stockType: StockType.Common,
        lastDividend: 5,
        fixedDividend: 0,
        parValue: 100
      };
      // Act
      const stockPrice = 0;
      const result = getDividendYield(stock, stockPrice);

      // Assert
      expect(result).toBe(0);
    });

    it('Returns lastDividend / price if Common stock', () => {
      // Arrange
      const stock:IStock = {
        ticker: 'TEST',
        stockType: StockType.Common,
        lastDividend: 10,
        fixedDividend: 0,
        parValue: 100
      };
      // Act
      const stockPrice = 2;
      const result = getDividendYield(stock, stockPrice);

      // Assert
      expect(result).toBe(5);
    });

    it('Returns (fixedDividend * parValue) / price if Preferred stock', () => {
      // Arrange
      const stock:IStock = {
        ticker: 'TEST',
        stockType: StockType.Preferred,
        lastDividend: 10,
        fixedDividend: 1,
        parValue: 100
      };
      // Act
      const stockPrice = 2;
      const result = getDividendYield(stock, stockPrice);

      // Assert
      expect(result).toBe(50);
    });
  });

  describe('getPERatio', () => {
    it('Returns 0 if lastDividend is 0', () => {
      // Arrange
      const stock:IStock = {
        ticker: 'TEST',
        stockType: StockType.Common,
        lastDividend: 0,
        fixedDividend: 0,
        parValue: 100
      };
      // Act
      const stockPrice = 0;
      const result = getPERatio(stock, stockPrice);

      // Assert
      expect(result).toBe(0);
    });

    it('Returns price / lastDividend if lastDividend !== 0', () => {
      // Arrange
      const stock:IStock = {
        ticker: 'TEST',
        stockType: StockType.Common,
        lastDividend: 10,
        fixedDividend: 0,
        parValue: 100
      };
      // Act
      const stockPrice = 2;
      const result = getPERatio(stock, stockPrice);

      // Assert
      expect(result).toBe(0.2);
    });
  });

  describe('getGeometricMean', () => {
    it('Returns 0 if no trades', () => {
      // Arrange

      // Act
      const result = getGeometricMean([]);

      // Assert
      expect(result).toBe(0);
    });

    it('Returns geometric mean if trades present', () => {
      // Arrange
      const trades = [{
        id: '001',
        ticker: 'TEST',
        buySellInd: BuySellInd.Buy,
        tradePrice: 1,
        quantity: 5,
        tradeDate: new Date(),
        tradeValue: 5
      },
      {
        id: '001',
        ticker: 'TEST',
        buySellInd: BuySellInd.Buy,
        tradePrice: 2,
        quantity: 5,
        tradeDate: new Date(),
        tradeValue: 5
      }];
      // Act
      const result = getGeometricMean(trades);

      // Assert
      expect(result).toBe(1.41); // 2 ^ 0.5
    });
  });

  describe('getStockPrice', () => {
    it('Returns 0 if no trades', () => {
      // Arrange

      // Act
      const result = getStockPrice([]);

      // Assert
      expect(result).toBe(0);
    });

    it('Returns volumetric weighted stock price if trades present', () => {
      // Arrange
      const trades = [{
        id: '001',
        ticker: 'TEST',
        buySellInd: BuySellInd.Buy,
        tradePrice: 1,
        quantity: 5,
        tradeDate: new Date(),
        tradeValue: 5
      },
      {
        id: '001',
        ticker: 'TEST',
        buySellInd: BuySellInd.Buy,
        tradePrice: 2,
        quantity: 5,
        tradeDate: new Date(),
        tradeValue: 5
      }];
      // Act
      const result = getStockPrice(trades);

      // Assert
      expect(result).toBe(1.5); //  15 / 10
    });
  });
});
