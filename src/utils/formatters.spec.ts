import { Big } from 'big.js';

import { formatDateAsString, toFinancial } from './formatters';

describe('formatters', () => {

  describe('formatDateAsString', () => {
    it('returns empty string when date is null or invalid', () => {
      // Arrange

      // Act
      const result = formatDateAsString(null);

      // Assert
      expect(result).toBe('');
    });

    it('returns formatted string when date is valid', () => {
      // Arrange

      // Act
      const result = formatDateAsString(new Date('2018-11-30 10:00'));

      // Assert
      expect(result).toBe('30-11-2018 10:00');
    });
  });

  describe('toFinancial', () => {
    it('returns 0 when Big is null', () => {
      // Arrange

      // Act
      const result = toFinancial(null);

      // Assert
      expect(result).toBe(0);
    });

    it('returns number with 2 decimal places', () => {
      // Arrange

      // Act
      const result = toFinancial(new Big(5.123123));

      // Assert
      expect(result).toBe(5.12);
    });
  });
});
