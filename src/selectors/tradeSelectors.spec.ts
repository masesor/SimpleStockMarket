import * as selectors from './tradeSelectors';

describe('tradeSelectors', () => {
  describe('getTrades', () => {
    it('Returns empty list when no trades', () => {
      // Arrange
      const state = {
        trades: []
      } as any;

      // Act
      const result = selectors.getTrades(state);

      // Assert
      expect(result).toEqual([]);
    });

    it('Returns trade list when trades present', () => {
      // Arrange
      const trades = [{
        id: '001',
        ticker: 'TEST',
        tradePrice: 1.5,
        quantity: 5,
        tradeDate: new Date(),
        tradeValue: 5
      }];

      const state = {
        trades
      } as any;

      // Act
      const result = selectors.getTrades(state);

      // Assert
      expect(result).toEqual(trades);
    });
  });

  describe('getTradesInReverseChronologicalOrder', () => {
    it('Returns empty list when no trades', () => {
      // Arrange
      const state = {
        trades: []
      } as any;

      // Act
      const result = selectors.getTradesInReverseChronologicalOrder(state);

      // Assert
      expect(result).toEqual([]);
    });

    it('Returns trade list when trades present', () => {
      // Arrange
      const tradeOne = {
        id: '001',
        ticker: 'TEST',
        tradePrice: 1.5,
        quantity: 5,
        tradeDate: new Date('2018-11-25T12:00:00Z'),
        tradeValue: 5
      };
      const tradeTwo = {
        id: '002',
        ticker: 'TEST1',
        tradePrice: 1.5,
        quantity: 5,
        tradeDate: new Date('2018-11-15T12:00:00Z'),
        tradeValue: 5
      };

      const tradeThree = {
        id: '003',
        ticker: 'TEST1',
        tradePrice: 1.5,
        quantity: 5,
        tradeDate: new Date('2018-11-30T12:00:00Z'),
        tradeValue: 5
      };

      const unsortedTrades = [tradeOne, tradeTwo, tradeThree];
      const tradesSortedByReverseDate = [tradeThree, tradeOne, tradeTwo];

      const state = {
        trades: unsortedTrades
      } as any;

      // Act
      const result = selectors.getTradesInReverseChronologicalOrder(state);

      // Assert
      expect(result).toEqual(tradesSortedByReverseDate);
    });
  });
});
